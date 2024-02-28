import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header id="home">
      <button
        onClick={() => {
          setShowModel(true);
        }}
        className="menu icon-menu"
      ></button>
      <div />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode"
        onClick={() => {
          // Send the value to the Local Storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // Get the value from the Local Storage
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
