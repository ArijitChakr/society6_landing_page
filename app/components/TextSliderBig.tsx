"use client";
import { useEffect, useState } from "react";

export default function TextSliderBig() {
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
    <div className=" relative overflow-hidden transform -translate-y-20">
      <div
        className="flex justify-center items-center gap-20"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {Array(10)
          .fill("Explore")
          .map((text, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-16 "
            >
              <p className="w-max text-black text-center text-9xl font-normal  tracking-wider font-primary">
                {text}
              </p>
              <div className="w-28 h-[1px] bg-black"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
