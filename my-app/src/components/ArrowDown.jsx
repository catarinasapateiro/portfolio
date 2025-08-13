import { useState } from "react";

export const ArrowDown = () => {
  const refArr = ["#about", "#projects", "#contact"];
  let index = 0;

  const [reference, setReference] = useState(refArr[0]);

  function updateRef() {
    if (reference === refArr[0]) {
      setReference(refArr[1]);
    } else if (reference === refArr[1]) {
      setReference(refArr[2]);
    } else if (reference === refArr[2]) {
      setReference(refArr[0]);
    }
  }

  return (
    <button
      onClick={updateRef}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 
                 lg:text-8xl text-transparent 
                 lg:text-amber-700/50 lg:hover:text-amber-800/80"
    >
      <a href={reference}>&#8964;</a>
    </button>
  );
};
