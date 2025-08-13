import { CardProject } from "../Card";
import { ArrowDown } from "../ArrowDown.jsx";
import { useEffect, useRef, useState } from "react";

export const Project = () => {
  const [isTitleShow, setIsTitleShown] = useState(false);
  const [isCardShow, setIsCardShown] = useState(false);

  const geoExplorer = {
    image: "./src/assets/geo-explorer.png",
    title: "Geo-explorer",
    text: (
      <>
        <span className="font-bold text-amber-800/90">GeoExplorer</span> is a{" "}
        <span className="font-bold text-amber-800/90">learning platform </span>{" "}
        built with <span className="font-bold text-amber-800/90">Next.js </span>
        and TailwindCSS, with a backend developed using Node.js. Users can{" "}
        <span className="font-bold text-amber-800/90">learn geography</span> by
        exploring the learning section or by taking quizzes and progressing
        through different levels of difficulty. This app was developed by me and
        five of my colleagues during the <span>Northcoders course</span>.
      </>
    ),
    date: "June 2025",
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center lg:p-0 lg:m-0 m-2 p-2 gap-4 lg:gap-12 lg:flex-row "
    >
      <div>
        <CardProject
          image={geoExplorer.image}
          title={geoExplorer.title}
          text={geoExplorer.text}
          date={geoExplorer.date}
        />
      </div>
      <div>
        <ArrowDown />
      </div>
    </section>
  );
};
