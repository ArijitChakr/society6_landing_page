"use client";
import { useEffect, useState } from "react";

export default function TextSlider({ text }: { text: string[] }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPos) {
        setTranslateX((prev) => prev - 10);
      } else if (currentScroll < scrollPos) {
        setTranslateX((prev) => prev + 10);
      }

      setScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <div className="my-auto py-10 relative overflow-hidden">
      <div
        className="flex justify-center items-center gap-20"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {Array(3)
          .fill(text)
          .flat()
          .map((text, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-16 "
            >
              <p className="w-max text-black text-center text-2xl font-semibold  tracking-wider font-secondary">
                {text}
              </p>
              <div className="w-28 h-[1px] bg-black"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
