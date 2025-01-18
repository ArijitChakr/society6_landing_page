"use client";
import Image from "next/image";
import { ShopByRoomData } from "../Text";
import { useState } from "react";

type ImageFrameProps = {
  image1: string;
  image2: string;
  text: string;
  buttonText: string;
};

export default function ShopByRoom() {
  const [frameType, setFrameType] = useState<
    "bathroom" | "bedroom" | "kitchen" | "livingroom"
  >("bathroom");

  return (
    <div className="mx-60 my-20">
      <div className="text-left">
        <h1 className="text-[10rem] tracking-snug font-primary">
          Shop By Room
        </h1>
        <div>
          <div className="w-1/2 grid grid-cols-4 gap-px bg-black rounded-full border border-black">
            <div
              className="uppercase text-center  py-2 font-bold cursor-pointer bg-white border-l border-black rounded-l-full"
              onClick={() => setFrameType("bathroom")}
            >
              bathroom
            </div>
            <div
              className="uppercase text-center  py-2 font-bold cursor-pointer bg-white"
              onClick={() => setFrameType("bedroom")}
            >
              bedroom
            </div>
            <div
              className="uppercase text-center  py-2 font-bold cursor-pointer bg-white"
              onClick={() => setFrameType("kitchen")}
            >
              kitchen
            </div>
            <div
              className="uppercase text-center  py-2 font-bold cursor-pointer bg-white border-l border-black rounded-r-full"
              onClick={() => setFrameType("livingroom")}
            >
              living room
            </div>
          </div>
          <div>
            <ImageFrame props={ShopByRoomData[frameType]} />
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageFrame = ({ props }: { props: ImageFrameProps }) => {
  const { image1, image2, text, buttonText } = props;
  return (
    <div className="flex justify-between my-20 gap-40">
      <div className="w-3/5 h-[500px] relative">
        <Image
          src={image1}
          alt="image1"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="flip-in-hor-bottom"
        />
      </div>

      <div className="flex flex-col w-[400px] justify-evenly items-start transform -translate-y-32">
        <div className="w-full h-[400px] relative">
          <Image
            src={image2}
            alt="image2"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="flip-in-hor-bottom"
          />
        </div>

        <h2 className="text-secondary text-2xl mt-10">{text}</h2>

        <div className="uppercase bg-black p-4 text-white font-bold mt-10">
          {buttonText}
        </div>
      </div>
    </div>
  );
};
