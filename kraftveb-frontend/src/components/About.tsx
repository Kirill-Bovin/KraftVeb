// src/components/About.tsx
import React from "react";
import Reveal from "./Reveal";

const About: React.FC = () => (
  <section
    id="about"
    className="py-24 bg-gray-100"
    style={{ scrollMarginTop: "6rem" }}
  >
    <div className="max-w-7xl mx-auto px-4 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          О нас
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Reveal>
          <div className="bg-white p-8 rounded-2xl shadow-md text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Наши ценности
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Качество и надёжность.</strong> Многоступенчатый контроль на каждом этапе.</li>
              <li><strong>Индивидуальный подход.</strong> Изучаем цели бизнеса и создаём точные решения.</li>
              <li><strong>Прозрачность.</strong> Вы всегда в курсе статуса проекта.</li>
              <li><strong>Постоянное развитие.</strong> Используем актуальные технологии и следим за трендами.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="bg-white p-8 rounded-2xl shadow-md text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Чем мы занимаемся
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Веб-разработка.</strong> Лендинги на Tilda, порталы и магазины на WordPress, SPA на React/Vite.</li>
              <li><strong>SEO и контент.</strong> Аудит, подбор ключевых слов, внутренняя оптимизация.</li>
              <li><strong>Айдентика и брендинг.</strong> Логотипы, гайдлайны, фирменный стиль.</li>
              <li><strong>Digital-маркетинг.</strong> Контекст, таргет, email-рассылки и аналитика KPI.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="bg-white p-8 rounded-2xl shadow-md text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Почему выбирают нас
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Опыт:</strong> Успешные проекты в разных нишах.</li>
              <li><strong>Результаты:</strong> +35% конверсии в первые полгода.</li>
              <li><strong>Поддержка:</strong> сопровождение и консультации после сдачи проекта(оплачивается отдельно).</li>
              <li><strong>Гибкие условия:</strong> почасовая работа, фикс-цена или «цена-функционал».</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;