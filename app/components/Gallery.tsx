import { galleryData } from "../Text";

export default function Gallery() {
  return (
    <div className="flex gap-10 justify-center items-center">
      {galleryData.map(({ image, text }, index) => (
        <div
          key={index}
          className="w-[400px] h-[400px] flex-shrink-0 bg-cover bg-center relative cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 " />
          <div className="absolute p-2 text-xl tracking-wide font-secondary bottom-1 left-1 bg-white ">
            {text}{" "}
            <span className="px-2 font-secondary rounded-full border-black border font-bold">
              {">"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
