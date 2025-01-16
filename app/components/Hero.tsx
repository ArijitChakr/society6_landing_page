export default function Hero({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col my-20">
      {/* Heading */}
      <h1 className="text-center text-9xl font-primary font-bold text-black tracking-wider leading-tight">
        Trending
        <br /> Collections
      </h1>

      {/* Sliding Container */}
      <div className="relative overflow-hidden mt-10">
        <div
          className="flex justify-center items-center gap-20 transform transition-transform duration-500"
          style={{
            transform: "translateX(15%)", // Moves to the right, showing 1/3 of the last div
          }}
        >
          <div className="bg-black w-[650px] h-[700px]"></div>
          <div className="bg-black w-[450px] h-[500px]"></div>
          <div className="bg-black w-[400px] h-[450px]"></div>
        </div>
      </div>
    </div>
  );
}
