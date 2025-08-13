import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("");
  const fullText = "Hi ❤";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 text-amber-700/50 flex flex-col items-center justify-center">
      <div className="mb-4 text-8xl font-mono font-bold">
        {loadingText} <span className="animate-blink ml-1"> </span>{" "}
      </div>

      <div className="w-[200px] h-[2px] bg-orange rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-pink-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
