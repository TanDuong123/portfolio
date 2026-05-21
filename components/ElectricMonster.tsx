"use client";

import { useEffect, useRef } from "react";

interface Point { x: number; y: number; }

export default function ElectricMonster() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Narrow ctx to non-null so TypeScript doesn't complain inside class bodies
    const ctxMaybe = canvas.getContext("2d");
    if (!ctxMaybe) return;
    const ctx: CanvasRenderingContext2D = ctxMaybe;

    const section = canvas.parentElement!;
    let w = (canvas.width  = section.offsetWidth);
    let h = (canvas.height = section.offsetHeight);

    const mouse: { x: number | false; y: number | false } = { x: false, y: false };

    function dist(p1x: number, p1y: number, p2x: number, p2y: number) {
      return Math.sqrt((p2x - p1x) ** 2 + (p2y - p1y) ** 2);
    }

    class Segment {
      pos: Point;
      nextPos: Point;
      l: number;
      ang: number;

      constructor(parent: Tentacle | Segment, l: number, a: number, first: boolean) {
        this.l   = l;
        this.ang = a;
        const src = first
          ? { x: (parent as Tentacle).x, y: (parent as Tentacle).y }
          : { x: (parent as Segment).nextPos.x, y: (parent as Segment).nextPos.y };
        this.pos     = { x: src.x, y: src.y };
        this.nextPos = {
          x: this.pos.x + l * Math.cos(a),
          y: this.pos.y + l * Math.sin(a),
        };
      }

      update(t: Point) {
        this.ang       = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
        this.pos.x     = t.x + this.l * Math.cos(this.ang - Math.PI);
        this.pos.y     = t.y + this.l * Math.sin(this.ang - Math.PI);
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }

      fallback(t: Point) {
        this.pos.x     = t.x;
        this.pos.y     = t.y;
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }

      show() { ctx.lineTo(this.nextPos.x, this.nextPos.y); }
    }

    class Tentacle {
      x: number; y: number; l: number; n: number;
      rand: number;
      segments: Segment[];
      angle = 0; dt = 0;
      t: Point = { x: 0, y: 0 };

      constructor(x: number, y: number, l: number, n: number, a: number) {
        this.x    = x; this.y = y; this.l = l; this.n = n;
        this.rand = Math.random();
        this.segments = [new Segment(this, l / n, 0, true)];
        for (let i = 1; i < n; i++)
          this.segments.push(new Segment(this.segments[i - 1], l / n, 0, false));
      }

      move(last_target: Point, target: Point) {
        this.angle = Math.atan2(target.y - this.y, target.x - this.x);
        this.dt    = dist(last_target.x, last_target.y, target.x, target.y) + 5;
        this.t = {
          x: target.x - 0.8 * this.dt * Math.cos(this.angle),
          y: target.y - 0.8 * this.dt * Math.sin(this.angle),
        };
        const tip = this.t.x ? this.t : target;
        this.segments[this.n - 1].update(tip);
        for (let i = this.n - 2; i >= 0; i--)
          this.segments[i].update(this.segments[i + 1].pos);

        if (dist(this.x, this.y, target.x, target.y) <=
            this.l + dist(last_target.x, last_target.y, target.x, target.y)) {
          this.segments[0].fallback({ x: this.x, y: this.y });
          for (let i = 1; i < this.n; i++)
            this.segments[i].fallback(this.segments[i - 1].nextPos);
        }
      }

      show(target: Point) {
        if (dist(this.x, this.y, target.x, target.y) > this.l) return;
        ctx.globalCompositeOperation = "lighter";
        ctx.beginPath();
        ctx.lineTo(this.x, this.y);
        for (let i = 0; i < this.n; i++) this.segments[i].show();
        ctx.strokeStyle = `hsl(${this.rand * 60 + 180},100%,${this.rand * 60 + 25}%)`;
        ctx.lineWidth   = this.rand * 2;
        ctx.lineCap     = "round";
        ctx.lineJoin    = "round";
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      }

      show2(target: Point) {
        ctx.beginPath();
        if (dist(this.x, this.y, target.x, target.y) <= this.l) {
          ctx.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
        } else {
          ctx.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
          ctx.fillStyle = "darkcyan";
        }
        ctx.fill();
      }
    }

    const maxl = 300, minl = 50, n = 30, numt = 500;
    const tent: Tentacle[] = [];
    for (let i = 0; i < numt; i++) {
      tent.push(new Tentacle(
        Math.random() * w,
        Math.random() * h,
        Math.random() * (maxl - minl) + minl,
        n,
        Math.random() * 2 * Math.PI,
      ));
    }

    const target: Point & { errx: number; erry: number } =
      { x: w / 2, y: h / 2, errx: 0, erry: 0 };
    const last_target: Point = { x: w / 2, y: h / 2 };
    let t = 0, rafId = 0;
    const q = 10;

    function draw() {
      if (mouse.x !== false) {
        target.errx = (mouse.x as number) - target.x;
        target.erry = (mouse.y as number) - target.y;
      } else {
        target.errx =
          w / 2 + ((h / 2 - q) * Math.sqrt(2) * Math.cos(t)) /
          (Math.sin(t) ** 2 + 1) - target.x;
        target.erry =
          h / 2 + ((h / 2 - q) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
          (Math.sin(t) ** 2 + 1) - target.y;
      }
      target.x += target.errx / 10;
      target.y += target.erry / 10;
      t += 0.01;

      ctx.beginPath();
      ctx.arc(
        target.x, target.y,
        dist(last_target.x, last_target.y, target.x, target.y) + 5,
        0, 2 * Math.PI,
      );
      ctx.fillStyle = "hsl(210,100%,80%)";
      ctx.fill();

      for (let i = 0; i < numt; i++) tent[i].move(last_target, target);
      for (let i = 0; i < numt; i++) tent[i].show2(target);
      for (let i = 0; i < numt; i++) tent[i].show(target);

      last_target.x = target.x;
      last_target.y = target.y;
    }

    function loop() {
      rafId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, w, h);
      draw();
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = false; mouse.y = false; };
    const onResize = () => {
      w = canvas.width  = section.offsetWidth;
      h = canvas.height = section.offsetHeight;
    };

    section.addEventListener("mousemove",  onMouseMove  as EventListener);
    section.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize",      onResize);

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener("mousemove",  onMouseMove  as EventListener);
      section.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize",      onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.45 }}
    />
  );
}
