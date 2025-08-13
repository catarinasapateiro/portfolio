import { useEffect, useRef, useState } from "react";
import { CardContact } from "../CardContact";

export const Contact = () => {
  const [isTitleShow, setIsTitleShown] = useState(false);
  const [isCardShow, setIsCardShown] = useState(false);

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center lg:p-0 lg:m-0 m-2 p-2 gap-4 lg:gap-12 lg:flex-row "
    >
      <div>
        <CardContact />
      </div>
    </section>
  );
};
