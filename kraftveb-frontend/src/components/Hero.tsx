import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const count = 100;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random() * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.8)";
        ctx.shadowColor = "#10B981";
        ctx.shadowBlur = 10;
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(16, 185, 129," + (1 - dist / 100) + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = "rgba(255, 255, 255," + (1 - distToMouse / 150) + ")";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden pb-16 bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col justify-end items-center h-full px-16 text-center">
        <Reveal>
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Создайте свой идеальный сайт с нами
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg text-white mb-10 max-w-2xl">
            Мы предлагаем профессиональные услуги веб-разработки,
            включая создание сайтов на Tilda и WordPress, SEO и брендинг.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex gap-6">
            <a
              href="#services"
              className="px-8 py-4 bg-[#10B981] text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
            >
              Узнать
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-[#111827] font-semibold rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Связаться
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;