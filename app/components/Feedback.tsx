"use client";
import Image from "next/image";
import { feedbackData } from "../Text";
import { useState } from "react";

export default function Feedback() {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<"1" | "2">("1");

  const slideNext = () => {
    setSliderIndex((prevIndex) =>
      prevIndex + 3 < feedbackData.length ? prevIndex + 3 : prevIndex
    );
    setActiveSlide("2");
  };

  const slidePrev = () => {
    setSliderIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : prevIndex
    );
    setActiveSlide("1");
  };

  return (
    <div className="mx-56 my-32 border-b border-black">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${sliderIndex * (400 + 98)}px)`,
          }}
        >
          {feedbackData.map(({ image, description }, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] flex-shrink-0 flex flex-col gap-6 justify-center items-center mx-10"
            >
              <Image src={image} alt="brand image" width={150} height={50} />
              <p className="text-center">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-10 justify-center items-center my-20 text-sm font-secondary font-bold">
          <div
            className={`p-2 rounded-full border-2 w-10 text-center ${
              activeSlide === "1" ? "border-black" : "border-white"
            }`}
            onClick={slidePrev}
          >
            01
          </div>
          <div
            className={`p-2 rounded-full border-2 w-10 text-center ${
              activeSlide === "2" ? "border-black" : "border-white"
            }`}
            onClick={slideNext}
          >
            02
          </div>
        </div>
      </div>
    </div>
  );
}
