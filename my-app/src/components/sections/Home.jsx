import { useState, useEffect, useRef } from "react";
import { ColourCircle } from "../ColourCircle.jsx";

export const Home = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("");
  const fullTitle = "My name is Catarina Sapateiro";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(fullTitle.substring(0, index));
      index++;

      if (index > fullTitle.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  const initialPositions = [
    {
      color: "#f89747ff",
      text: "Javascript",
      rotate: "rotate(55)",
      x: 0,
      y: 0,
      textX: "27%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
    {
      color: "#ffc403ff",
      text: "React",
      rotate: "rotate(55)",
      x: 250,
      y: 0,
      textX: "34%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
    {
      color: "#f36974ff",
      text: "Node.js",
      rotate: "rotate(60)",
      x: 500,
      y: 0,
      textX: "34%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
    {
      color: "#45bbdfff",
      text: "Express.js",
      rotate: "rotate(0)",
      x: 0,
      y: 250,
      textX: "32%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
    {
      color: "#a2d48eff",
      text: "SQL",
      rotate: "rotate(30)",
      x: 250,
      y: 250,
      textX: "45%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
    {
      color: "#598b7bff",
      text: "TDD",
      rotate: "rotate(0)",
      x: 500,
      y: 250,
      textX: "45%",
      textY: "55%",
      numberLg: 14,
      numberMb: 7,
    },
  ];

  const [positions, setPositions] = useState(initialPositions);

  const handleMouseEnter = (index) => {
    const nextIndex = (index + 1) % positions.length;
    const newPositions = [...positions];
    [newPositions[index], newPositions[nextIndex]] = [
      newPositions[nextIndex],
      newPositions[index],
    ];
    setPositions(newPositions);
  };

  const handleMouseLeave = () => {
    setPositions(initialPositions);
  };

  return (
    <div className="flex justify-center lg:justify-center lg:items-center">
      <section
        id="about"
        className="w-full min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center gap-4 lg:gap-12 lg:ml-60"
      >
        <div className="max-w-[1400px] w-full lg:w-1/2 xl:w-1/3 z-10 px-4 order-1 lg:order-1 justify-center">
          <div className="min-h-[3.5rem] lg:min-h-[5rem] mb-3">
            <h1 className="text-2xl lg:text-6xl font-semibold  mt-0 bg-gradient-to-r from-amber-800/90 to-amber-700/50 bg-clip-text text-transparent leading-tight">
              {loadingText.slice(0, 11)}
            </h1>
          </div>
          <div className="min-h-[2.5rem] lg:min-h-[3rem] mb-10">
            <h1
              className="text-2xl lg:text-4xl font-semibold mb-10 bg-gradient-to-r from-amber-800/90 to-amber-700/50 bg-clip-text text-transparent leading-tight"
              style={{
                opacity: loadingText.length > 12 ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }}
            >
              {loadingText.length > 10 ? (
                loadingText.slice(11, loadingText.length)
              ) : (
                <span className="invisible">Catarina Sapateiro</span>
              )}
            </h1>
          </div>
          <div className="min-h-[200px] lg:min-h-[250px]">
            <h3
              className="text-lg lg:text-2xl font-semibold mb-3 text-amber-800/70 text-justify break-normal"
              style={{
                opacity: loadingText.length > 28 ? 1 : 0,
                transition: "opacity 3s ease-in-out",
              }}
            >
              {loadingText.length > 28 ? (
                <>
                  I'm a{" "}
                  <span className="font-bold text-amber-800/90">
                    junior software developer
                  </span>{" "}
                  and a{" "}
                  <span className="font-bold text-amber-800/90">
                    creative thinker
                  </span>{" "}
                  with a particular interest in
                  <span className="font-bold text-amber-800/90">
                    {" "}
                    frontend
                  </span>{" "}
                  development. With a background in landscape architecture, I
                  bring
                  <span className="font-bold text-amber-800/90">
                    {" "}
                    strong problem-solving{" "}
                  </span>
                  skills and a
                  <span className="font-bold text-amber-800/90">
                    'green heart'
                  </span>{" "}
                  to my work.
                </>
              ) : (
                <span className="invisible">
                  I'm a junior software developer and a creative thinker with a
                  particular interest in frontend development. With a background
                  in landscape architecture, I bring strong problem-solving
                  skills and a 'green heart' to my work.
                </span>
              )}
            </h3>
          </div>
        </div>

        <div className="max-w-[1400px]  w-full lg:w-1/2 xl:w-2/3 relative order-2 lg:order-2 flex justify-center">
          <div
            className="hidden lg:block"
            style={{
              width: 720,
              height: 480,
              opacity: loadingText.length > 28 ? 1 : 0,
              transition: "opacity 3s ease-in-out",
            }}
          >
            {loadingText.length > 28
              ? positions.map(
                  (
                    { color, text, rotate, x, y, textX, textY, numberLg },
                    index
                  ) => (
                    <div
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        position: "absolute",
                        left: x,
                        top: y,
                        transition: "left 2s ease, top 2s ease",
                      }}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <ColourCircle
                        size={250}
                        color={color}
                        text={text}
                        rotate={rotate}
                        textX={textX}
                        textY={textY}
                        number={numberLg}
                      />
                    </div>
                  )
                )
              : ""}
          </div>

          <div className="lg:hidden grid grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
            {initialPositions.map(
              ({ color, text, rotate, textX, textY, numberMb }, index) => (
                <div key={index} className="flex justify-center">
                  <ColourCircle
                    size={150}
                    color={color}
                    text={text}
                    rotate={rotate}
                    textX={textX}
                    textY={textY}
                    number={numberMb}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2"></div>
      </section>
    </div>
  );
};
