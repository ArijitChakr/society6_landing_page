"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [scrollPos, setScrollPos] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > scrollPos) {
        setTranslateX((prev) => prev - 3);
      } else if (currentScroll < scrollPos) {
        setTranslateX((prev) => prev + 3);
      }

      setScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <div className="relative overflow-hidden">
      <div
        className=" flex justify-center items-center gap-20 "
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <CarouselItem
          image1="/art7.webp"
          image2="/art5.webp"
          image3="/art6.webp"
        />
        <CarouselItem
          image1="/Art1.webp"
          image2="/art2.webp"
          image3="/Art3.webp"
        />
        <CarouselItem
          image1="/Art4.webp"
          image2="/art2.webp"
          image3="/Art3.webp"
        />
      </div>
    </div>
  );
}

function CarouselItem({
  image1,
  image2,
  image3,
}: {
  image1: string;
  image2: string;
  image3: string;
}) {
  return (
    <div className=" flex items-center justify-center gap-20">
      <div className="w-[400px] h-[400px] my-auto">
        <Image src={image1} alt="image1" width={400} height={400} />
      </div>
      <div className="flex flex-col h-[700px] justify-between py-10 items-center ">
        <div className="w-[250px] h-[300px]">
          <Image src={image2} alt="image2" width={250} height={300} />
        </div>
        <div className="w-[250px] h-[300px] ">
          <Image src={image3} alt="image3" width={250} height={300} />
        </div>
      </div>
    </div>
  );
}
