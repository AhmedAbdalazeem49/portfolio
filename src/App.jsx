import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  });
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        href="#up"
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
      >
        <button className="scrollToTop icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
