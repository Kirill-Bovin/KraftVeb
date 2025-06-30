import React from "react";
import Reveal from "./Reveal";

const Footer: React.FC = () => (
  <footer className="py-10 bg-[#1F2937] text-white">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <Reveal>
        <div className="font-bold text-2xl mb-4 md:mb-0">KraftVeb</div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="text-sm text-center md:text-right">
          <div><span className="font-medium">Почта:</span> <a href="mailto:info@kraftveb.ru" className="hover:underline">info@kraftveb.ru</a></div>
          <div><span className="font-medium">Телеграм:</span> <a href="https://t.me/StoryWallker" target="_blank" rel="noopener noreferrer" className="hover:underline">@StoryWallker</a></div>
        </div>
      </Reveal>
    </div>
  </footer>
);

export default Footer;