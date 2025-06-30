import React from "react";
import Reveal from "./Reveal";

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 w-full z-50 py-6 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <a href="/">
        {/* путь изменён на /static/assets/logo.png */}
        <img
          src="/static/assets/logo.png"
          alt="KraftVeb"
          className="h-20"
        />
      </a>

      <nav className="space-x-6 text-[#111827] text-sm font-medium">
        <a href="#services">Услуги</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#about">О нас</a>
        <button
          onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="ml-4 px-5 py-2 bg-[#10B981] text-white rounded-lg font-semibold"
        >
          Начать
        </button>
      </nav>
    </div>
  </header>
);

export default Header;