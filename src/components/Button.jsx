import React from "react";
import "../assets/styles/Button.css";

export const Button = ({ text, handleClick, isButtonClick }) => {
  return (
    <button
      className={isButtonClick ? "button-click" : "button-reset"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
