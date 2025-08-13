import React from "react";
import "./Line.css";

export function Line({ color, thickness, width, animate }) {
  return (
    <div
      className={`${color} ${thickness} ${width} rounded-full mb-10`}
      style={{
        animation: animate ? "lineDrawToLeft 0.8s ease forwards" : "none",
      }}
    />
  );
}
