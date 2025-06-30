import React from "react";
import Reveal from "./Reveal";
import { FaLaptop, FaChartBar, FaPenNib } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop size={40} />,
    title: "Веб-разработка и создание сайтов",
    description: "Создаем современные и функциональные сайты."
  },
  {
    icon: <FaChartBar size={40} />,
    title: "SEO для повышения видимости вашего сайта",
    description: "Оптимизируем ваш сайт для поисковых систем."
  },
  {
    icon: <FaPenNib size={40} />,
    title: "Брендинг для вашего уникального имиджа",
    description: "Создаем запоминающийся и привлекательный бренд."
  }
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#EAF4E1]"
      style={{ scrollMarginTop: "6rem" }} // сдвиг секции ниже фиксированного хедера
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold mb-10">
            Наши услуги для вашего бизнеса
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-4xl mx-auto text-lg text-[#1F2937] leading-relaxed text-justify mb-16">
            Мы предлагаем полный спектр услуг в области веб-разработки, включая
            создание сайтов на <b>Tilda</b> и <b>WordPress</b>. Наша команда
            поможет вам оптимизировать сайт и создать уникальный бренд.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md">
                <div className="mb-6 text-[#1F2937]">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6B7280]">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-16">
          <a
            href="#contact"
            className="px-8 py-4 text-[#1F2937] font-semibold transition underline"
          >
            Связаться →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;