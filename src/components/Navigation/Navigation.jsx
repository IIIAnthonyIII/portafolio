import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  const navItems = [
    { id: "#", icon: "fa-house" },
    { id: "#about", icon: "fa-user" },
    { id: "#experience", icon: "fa-book" },
    { id: "#service", icon: "fa-hammer" },
    { id: "#contact", icon: "fa-id-card" },
  ];
  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };
  return (
    <nav>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => handleNavClick(item.id)}
          className={activeNav === item.id ? "active" : ""}
        >
          <i className={`fa-solid ${item.icon}`}></i>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
