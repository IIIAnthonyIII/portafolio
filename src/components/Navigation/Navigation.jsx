import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");
  const navItems = [
    { id: "home", route: "/", icon: "fa-house" },
    { id: "about", route: "/about", icon: "fa-user" },
    { id: "experience", route: "/experience", icon: "fa-book" },
    { id: "service", route: "/service", icon: "fa-hammer" },
    { id: "contact", route: "/contact", icon: "fa-id-card" },
  ];
  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };
  return (
    <nav>
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.route}
          onClick={() => handleNavClick(item.id)}
          className={activeNav === item.id ? "active" : ""}
        >
          <i className={`fa-solid ${item.icon}`}></i>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
