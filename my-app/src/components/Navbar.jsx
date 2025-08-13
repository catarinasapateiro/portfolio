import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const textSyle =
    "font-sans  hover:text-amber-700  p-2 text-2xl font-semibold text-amber-700/60 transition-colors delay-200 duration-300 ease-in-out";
  const anchorStyle = "hidden md:flex items-center space-x-8";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 mb-0 bg-[#eecd85] md:bg-[#f5eddc] backdrop-blur-lg border-b border-white/10 md:shadow-md md:shadow-amber-700/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="w-7 h-5 text-amber-700/50 text-2xl relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "x" : "☰"}
          </div>

          <div className={`${anchorStyle}`}>
            <a href="#about" className={textSyle}>
              About me
            </a>
          </div>
          <div className={`${anchorStyle}`}>
            <a href="#projects" className={textSyle}>
              Projects
            </a>
          </div>
          <div className={`${anchorStyle}`}>
            <a href="#contact" className={textSyle}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
