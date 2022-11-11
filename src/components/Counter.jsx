import React from "react";
import "../assets/styles/Counter.css";

export const Counter = ({ numClick }) => {
  return <span className="counter">{numClick}</span>;
};
