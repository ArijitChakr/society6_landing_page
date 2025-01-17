"use client";

import { useState } from "react";
import { HeroSliderText } from "../Text";

export default function Hero({ images }: { images: string[] }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextImage = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % (images.length * 3));
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
              texts={HeroSliderText}
              indexOffset={0}
              sliderIndex={sliderIndex}
            />
          </div>
          <div className="w-[450px] h-[650px] flex flex-col justify-evenly">
            <h2 className="text-secondary text-xl">
              First Look at the Newest Spring Trends.
            </h2>
            <div className="w-[450px] h-[450px]">
              <ImageSlider
                images={images}
                texts={Array(3).fill(HeroSliderText).flat()}
                indexOffset={1}
                sliderIndex={sliderIndex}
              />
            </div>
            <div className="flex justify-evenly items-center">
              <button
                onClick={prevImage}
                className="bg-white text-black px-4 py-2 rounded shadow-lg focus:outline-none"
              >
                Prev
              </button>
              <button
                onClick={nextImage}
                className="bg-white text-black px-4 py-2 rounded shadow-lg focus:outline-none"
              >
                Next
              </button>
            </div>
          </div>

          <div className="w-[400px] h-[400px]">
            <ImageSlider
              images={images}
              texts={HeroSliderText}
              indexOffset={2}
              sliderIndex={sliderIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageSlider = ({
  images,
  texts,
  sliderIndex,
  indexOffset,
}: {
  images: { string }[];
  sliderIndex: number;
  indexOffset: number;
}) => {
  const totalOffset = (sliderIndex + indexOffset) % (images.length * 3);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex w-full h-full"
        style={{
          transform: `translateX(-${totalOffset * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {Array(3)
          .fill(images)
          .flat()
          .map(({ image, text }, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="absolute p-2 text-xl tracking-wide font-secondary bottom-0 left-0 bg-white">
                {text}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
