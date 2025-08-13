import { Line } from "./Line";
import { ColourCircle } from "./ColourCircle";
import { useEffect, useRef, useState } from "react";

export function CardProject({ image, title, text, date }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const line = {
    color: "bg-[#f89747ff]",
    thickness: "h-3",
    width: "w-full",
  };

  const circle = {
    color: "#f36974ff",
    text: (
      <>
        {" "}
        <a href="https://learn-with-geo-explorer.netlify.app/" target="_blank">
          Link
        </a>{" "}
      </>
    ),
    rotate: "rotate(55)",
    x: `${position.x}px`,
    y: `${position.y}px`,
    textX: "38%",
    textY: "58%",
    numberLg: 6,
    numberMb: 4,
  };

  const handleHover = () => {
    if (!isHovered) {
      setPosition({
        x: Math.random() * 175 - 75,
        y: Math.random() * 175 - 50,
      });
    }
    setIsHovered(!isHovered);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-6xl font-semibold mb-2 lg:mb-4 bg-gradient-to-r from-amber-800/80 to-amber-700/40 bg-clip-text text-transparent leading-right px-4 lg:px-0">
          {title}
        </h1>
        <Line
          color={line.color}
          thickness={line.thickness}
          width={line.width}
        />
      </div>
      <div className="lg:max-w-[90rem] lg:max-h-[50rem] lg:overflow-visible lg:flex lg:gap-12">
        <div className="lg:w-1/2">
          <img
            className="px-4 lg:px-0 lg:object-cover mb-4"
            src={image}
            alt="project"
          />
        </div>
        <div className="flex flex-col lg:w-1/2 items-start justify-start">
          <p className="text-lg lg:text-2xl px-4 lg:px-0 font-semibold mb-5 lg:mb-20 text-amber-800/70 text-justify break-normal leading-10">
            {text}
          </p>
          <div className="w-full flex justify-between">
            <p className="text-md lg:text-xl font-semibold text-amber-800/70 px-4 ">
              {date}
            </p>
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className="justify-self-end hover:cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition:
                  "transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
              }}
            >
              <ColourCircle
                color={circle.color}
                size={150}
                text={circle.text}
                rotate={circle.rotate}
                textX={circle.textX}
                textY={circle.textY}
                number={circle.numberLg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
