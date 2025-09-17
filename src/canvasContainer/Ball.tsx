"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Ball.module.scss";

interface Bolt {
  segments: { x: number; y: number }[];
  thickness: number;
  alpha: number;
  age: number;
  maxAge: number;
}

export const PlasmaBallCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // -------------------------------
    // функция пересчёта размеров
    // -------------------------------
    const resizeCanvas = () => {
      const vw = window.innerWidth / 100;
      const sizeVW = window.innerWidth < 1000 ? 70 : 30; // до 1000px = 60vw, иначе 30vw
      const sizePx = sizeVW * vw;

      // Масштабируем с учетом DPR
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = sizePx * dpr;
      canvas.height = sizePx * dpr;
      canvas.style.width = sizeVW + "vw";
      canvas.style.height = sizeVW + "vw";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      return {
        W: sizePx,
        H: sizePx,
        center: { x: sizePx / 2, y: sizePx / 2 },
        radius: Math.min(sizePx, sizePx) * 0.4,
      };
    };

    // -------------------------------
    // инициализация
    // -------------------------------
    let { W, H, center, radius } = resizeCanvas();
    let lineScale = window.innerWidth < 1000 ? 0.5 : 1;

    // -------------------------------
    // Молнии
    // -------------------------------
    const bolts: Bolt[] = [];
    let lastGroup = 0;
    const groupInterval = 300;

    function subdivide(points: { x: number; y: number }[], offset: number): { x: number; y: number }[] {
      if (offset < 1) return points;
      const newPts = [points[0]];
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i],
          b = points[i + 1];
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const disp = (Math.random() * 2 - 1) * offset;
        const perpX = b.y - a.y,
          perpY = -(b.x - a.x);
        const norm = Math.hypot(perpX, perpY) || 1;
        newPts.push({
          x: midX + (perpX / norm) * disp,
          y: midY + (perpY / norm) * disp,
        });
        newPts.push(b);
      }
      return subdivide(newPts, offset * 0.5);
    }

    function spawnGroup() {
      const count = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const end = {
          x: center.x + radius * Math.cos(angle),
          y: center.y + radius * Math.sin(angle),
        };
        const mainPts = subdivide([center, end], radius * 0.5);
        const mainBolt: Bolt = {
          segments: mainPts,
          thickness: 1 + Math.random() * 0.5,
          age: 0,
          maxAge: 40 + Math.floor(Math.random() * 20),
          alpha: 0,
        };
        bolts.push(mainBolt);
      }
    }

    let rafId: number;
    let lastTime = 0;

    function animate(ts: number = 0) {
      const dt = ts - lastGroup;
      if (dt > groupInterval) {
        spawnGroup();
        lastGroup = ts;
      }

      // ограничим FPS ~30
      if (ts - lastTime < 33) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      lastTime = ts;

      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, W, H);

      // круг
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      ctx.clip();
      ctx.fill();

      // бордер
      ctx.strokeStyle = "#a2fcfc";
      ctx.lineWidth = 4 * lineScale;
      ctx.stroke();

      // рисуем молнии
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = ctx.lineJoin = "round";

      // обновляем возраст
      bolts.forEach((b) => {
        b.age++;
        const half = b.maxAge * 0.3;
        b.alpha = b.age < half ? b.age / half : 1 - (b.age - half) / (b.maxAge - half);
      });

      const aliveBolts = bolts.filter((b) => b.age < b.maxAge);
      bolts.length = 0;
      bolts.push(...aliveBolts);

      if (bolts.length > 20) bolts.splice(0, bolts.length - 20);

      // рисуем
      bolts.forEach((b) => {
        ctx.strokeStyle = `rgba(162, 252, 252, ${b.alpha * 0.2})`;
        ctx.lineWidth = b.thickness * 6 * lineScale;
        ctx.beginPath();
        ctx.moveTo(b.segments[0].x, b.segments[0].y);
        b.segments.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.stroke();

        ctx.strokeStyle = `rgba(162, 252, 252, ${b.alpha * 0.4})`;
        ctx.lineWidth = b.thickness * 3 * lineScale;
        ctx.beginPath();
        ctx.moveTo(b.segments[0].x, b.segments[0].y);
        b.segments.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.stroke();

        ctx.strokeStyle = `rgba(162, 252, 252, ${b.alpha * 0.85})`;
        ctx.lineWidth = b.thickness * 1 * lineScale;
        ctx.beginPath();
        ctx.moveTo(b.segments[0].x, b.segments[0].y);
        b.segments.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.stroke();
      });

      ctx.restore();

      rafId = requestAnimationFrame(animate);
    }

    animate();

    // -------------------------------
    // resize listener
    // -------------------------------
    const handleResize = () => {
      const newValues = resizeCanvas();
      W = newValues.W;
      H = newValues.H;
      center = newValues.center;
      radius = newValues.radius;
      lineScale = window.innerWidth < 1000 ? 0.5 : 1;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.lightning}>
      <canvas ref={canvasRef} className={styles["lightning--animate"]} />
    </div>
  );
};
