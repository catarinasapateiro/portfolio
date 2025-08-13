import { ColourCircle } from "./ColourCircle";
import { Line } from "./Line";
import { useState } from "react";

export const CardContact = () => {
  const [imgSrc, setImgSrc] = useState("src/assets/IMG_2944.JPG");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const line = {
    color: "bg-[#a2d48eff]",
    thickness: "h-3",
    width: "w-full",
  };

  const circle = {
    color: "#a2d48eff",
    text: "",
    rotate: "rotate(55)",
    x: `${position.x}px`,
    y: `${position.y}px`,
    textX: "38%",
    textY: "58%",
    numberLg: 6,
    numberMb: 4,
  };

  const handleMouseEnter = () => {
    setImgSrc(
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnE0dm5nMWJ4bDAyY2syaGZwOG5qdWFkc2pxaDM0bmc0dndtbXQ0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNqEFrYVnsS52/giphy.gif"
    );
  };

  const handleMouseLeave = () => {
    setImgSrc("src/assets/IMG_2944.JPG");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-6xl font-semibold mb-2 lg:mb-4 bg-gradient-to-r from-amber-800/80 to-amber-700/40 bg-clip-text text-transparent leading-right px-4 lg:px-0">
          Contact
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full h-auto lg:h-[30rem] object-cover transition-opacity duration-300 ease-in"
            src={imgSrc}
            alt="photo"
          />
        </div>
        <div className="flex flex-col lg:w-1/2 items-start justify-start">
          <p className="text-lg lg:text-2xl px-4 lg:px-0 font-semibold mb-5 lg:mb-20 text-amber-800/70 text-justify break-normal leading-10">
            If you like my work and you would like to contact me use one of the
            contacts below. <br />
          </p>

          <div className="w-full flex justify-between">
            <div>
              <p className="text-lg lg:text-2xl px-4 lg:px-0 font-semibold mb-5 lg:mb-20 text-amber-800/70 text-justify break-normal leading-10">
                <span className="font-bold text-amber-800/90">email:</span>{" "}
                catarinasapateiro@hotmail.com <br />
                <span className="font-bold text-amber-800/90">linkedin:</span>
                <a
                  className="lg:text-xl"
                  href="https://www.linkedin.com/in/catarina-sapateiro-a054b8213/"
                  target="_blank"
                ></a>
              </p>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="justify-self-end flex hover:cursor-pointer"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition:
                  "transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
