import "./App.css";
import "./index.css";
import { useMemo } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Project } from "./components/sections/Project";
import { Contact } from "./components/sections/Contact";
import { ArrowDown } from "./components/ArrowDown";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-beige text-orange`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home onComplete={() => setIsLoaded(true)} />
        <ArrowDown />
        <Project />
        <ArrowDown />
        <Contact />
        <ArrowDown />
      </div>
    </>
  );
}
