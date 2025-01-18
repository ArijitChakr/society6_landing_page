export default function LearnMore() {
  return (
    <div
      className="w-full h-[26rem] bg-cover bg-center flex flex-col gap-8 justify-center items-center"
      style={{
        backgroundImage: `url(/HeaderImage.webp)`,
      }}
    >
      <h1 className="text-4xl font-semibold font-secondary tracking-wider ">
        Inspiring self-expression by celebrating creativity.
      </h1>
      <div className="font-bold font-secondary uppercase bg-black text-white text-lg tracking-wide px-6 py-4">
        Learn More
      </div>
    </div>
  );
}
