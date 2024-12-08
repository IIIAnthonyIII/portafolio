import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="w-[100%] text-center">
      <h1 className="text-center mt-[5%] text-4xl text-[#1672eb]" >Ops! Página no encontrada...</h1>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <button>Volver</button>
    </div>
  );
};

export default NotFound;
