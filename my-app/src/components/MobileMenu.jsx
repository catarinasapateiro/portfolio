import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const textSyle = `text-xl font-semibold text-amber-700/60 my-4 transform transition-transform <dutation-300></dutation-300 ${
    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 tranlate-y-5"
  }`;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-transparent z-40 flex flex-col items-center justify-center transition-all duration-300 ease-i-out 
   ${
     menuOpen
       ? "h-screen opacity-100 pointer-events-auto"
       : "h-0 opacity-0 pointer-events-none"
   } `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 left-6 text-white color-white focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        {menuOpen?"x":""}
      </button>

    
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          className={textSyle}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
      </div>
      <a
        href="#projects"
        className={textSyle}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>

      <a
        href="#contact"
        className={textSyle}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
};
