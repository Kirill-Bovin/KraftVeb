import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage: React.FC = () => (
  <div>
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;