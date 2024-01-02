import { useEffect } from "react";
import { useState } from "react";
import "./Theme.css";
import "../../index.css";

const Theme = () => {
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const options = [
    // {
    //   icon: "fa-sun",
    //   text: "light",
    // },
    // {
    //   icon: "fa-moon",
    //   text: "dark",
    // },
    {
      icon: "fa-desktop",
      text: "system",
    },
  ];
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
    animationIcon();
  };
  function onWindowsMacth() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
      operationClassIcons("fa-sun", "fa-moon");
    } else {
      element.classList.remove("dark");
      operationClassIcons("fa-moon", "fa-sun");
    }
    animationIcon();
  }
  function operationClassIcons(removeIcon, addIcon) {
    const icon = document.querySelector(".btn_icon");
    icon.classList.remove(removeIcon);
    icon.classList.add(addIcon);
  }
  function animationIcon() {
    const icon = document.querySelector(".btn_icon");
    icon.classList.add("animated");
    setTimeout(() => {
      icon.classList.remove("animated");
    }, 500);
  }
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      operationClassIcons("fa-sun", "fa-moon");
    }
    if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      operationClassIcons("fa-moon", "fa-sun");
    }
    if (theme === "system") {
      localStorage.removeItem("theme");
      onWindowsMacth();
    }
  }, [theme]);
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
        operationClassIcons("fa-sun", "fa-moon");
      } else {
        element.classList.remove("dark");
        operationClassIcons("fa-moon", "fa-sun");
      }
    }
    animationIcon();
  });
  return (
    <div className="flex">
      <div className="btn w-20 h-12" onClick={handleChangeTheme}>
        <div className="btn_indicator">
          <div className="btn_icon-container">
            <i className="btn_icon fa-solid"></i>
          </div>
        </div>
      </div>
      {options?.map((opt) => (
        <div
          className="btn w-12 h-12 ml-2 justify-center hover:bg-blue-100"
          onClick={() => setTheme(opt.text)}
        >
          <button
            key={opt.text}
            className={`flex hover:text-sky-600 ${
              theme === opt.text && "text-sky-600"
            }`}
          >
            <i className={`fa-solid ${opt.icon}`}></i>
          </button>
        </div>
      ))}
    </div>
  );
};
export default Theme;
