import { useEffect } from "react";
import { useState } from "react"

function App(){
  const [theme, setTheme] = useState(()=>{
    // const darkMode = localStorage.getItem('darkMode');
    // if(!darkMode){
      if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        // localStorage.setItem("darkMode","dark")
        return "dark";
      };
      // localStorage.setItem("darkMode","light")
      return "light";
    // }
    // return darkMode;
  });
  useEffect(()=>{
    const icon = document.querySelector(".btn_icon");
    const body = document.querySelector("body");
    if(theme == "dark"){
      body.classList.add("dark");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }else{
      body.classList.remove("dark");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }, [theme]);
  const handleChangeTheme = ()=>{
    const icon = document.querySelector(".btn_icon");
    icon.classList.add("animated");
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
    setTimeout(()=>{
      icon.classList.remove('animated');
    }, 500)
  }
  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950
      dark:text-white dark:hover:bg-slate-900"
      onClick={handleChangeTheme}>
        Change theme
      </button>
      <div className="btn" onClick={handleChangeTheme}>
        <div className="btn_indicator">
          <div className="btn_icon-container">
            <i className="btn_icon fa-solid"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App