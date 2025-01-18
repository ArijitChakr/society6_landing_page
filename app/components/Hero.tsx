"use client";

import { useState } from "react";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { HeroButtonTexts } from "../Text";

export default function Hero({
  images,
}: {
  images: { image: string; text: string }[];
}) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextImage = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === images.length * 3 - 1 ? (prevIndex = 0) : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSliderIndex((prevIndex) =>
      prevIndex === 0 ? images.length * 3 - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col my-20">
      <h1 className="text-center text-9xl font-primary font-bold text-black tracking-wider leading-tight">
        Trending
        <br /> Collections
      </h1>
      <div className="relative overflow-hidden mt-10">
        <div
          className="flex justify-center items-center gap-20"
          style={{ transform: `translateX(12%)` }}
        >
          <div className="w-[650px] h-[650px]">
            <ImageSlider
              images={images}
              indexOffset={0}
              sliderIndex={sliderIndex}
            />
          </div>
          <div className="w-[450px] h-[650px] flex flex-col justify-evenly">
            <h2 className="text-secondary text-2xl mb-10">
              First Look at the Newest Spring Trends.
            </h2>
            <div className="w-[450px] h-[450px]">
              <ImageSlider
                images={images}
                indexOffset={1}
                sliderIndex={sliderIndex}
              />
            </div>
            <div className="flex justify-between mt-4 items-center">
              <button
                onClick={prevImage}
                className="cursor-pointer py-2 rounded- font-bold bg-white text-black "
                disabled={sliderIndex === 0}
              >
                <PrevArrow />
              </button>
              <button
                onClick={nextImage}
                className="bg-white text-black py-2 rounded font-bold"
                disabled={sliderIndex === images.length * 3 - 1}
              >
                <NextArrow />
              </button>
            </div>
          </div>

          <div className="w-[400px] h-[400px]">
            <ImageSlider
              images={images}
              indexOffset={2}
              sliderIndex={sliderIndex}
            />
          </div>
        </div>
      </div>
      <div className=" my-10 flex  justify-center gap-4 items-center">
        <h2 className="text-secondary text-2xl">Explore Trending Styles</h2>
        {HeroButtonTexts.map((text, index) => (
          <div
            key={index}
            className="cursor-pointer px-6 py-2 text-sm font-bold font-secondary text-black hover:bg-black hover:text-white rounded-full text-center border border-black"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

const ImageSlider = ({
  images,
  sliderIndex,
  indexOffset,
}: {
  images: { text: string; image: string }[];
  sliderIndex: number;
  indexOffset: number;
}) => {
  const totalOffset = (sliderIndex + indexOffset) % (images.length * 3);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex w-full h-full cursor-pointer"
        style={{
          transform: `translateX(-${totalOffset * 100}%)`,
          transition: "transform 1.5s ease-in-out",
        }}
      >
        {Array(3)
          .fill(images)
          .flat()
          .map(({ image, text }, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center relative "
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="absolute inset-0 " />
              <div className="absolute p-2 text-xl tracking-wide font-secondary bottom-0 left-0 bg-white ">
                {text}{" "}
                <span className="px-2 font-secondary rounded-full border-black border">
                  {">"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
