import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import "./Portfolio.css"; // подключаем стили

const portfolioItems = [
  {
    title: "Проект выставки обуви Shoesstar на Tilda",
    description: "Сайт выставок обуви международного формата",
    image: "/static/assets/ShoesstarTilda.png"
  },
  {
    title: "Проект выставки обуви Shoesstar на WordPress",
    description: "Сайт выставок обуви международного формата",
    image: "/static/assets/ShoesstarWorpress.png"
  },
  {
    title: "Проект по продаже лома цветных металлов",
    description: "Интернет-магазин по закупке и продаже цветных металлов",
    image: "/static/assets/Uralspeslom.png"
  }
];

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      // добавляем класс, чтобы запустить анимацию
      el.classList.add("animate-unfold");
    }
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white" style={{ scrollMarginTop: "6rem" }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Reveal><h2 className="text-4xl font-bold text-[#1F2937] mb-10">Наши работы</h2></Reveal>

        {/* Контейнер с карточками */}
        <div
          id="portfolio-cards"
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, i) => (
            <div key={i} className="card bg-[#F9FAFB] rounded-xl overflow-hidden shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;