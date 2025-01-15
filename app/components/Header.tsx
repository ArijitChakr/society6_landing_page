import Image from "next/image";

export default function Header() {
  return (
    <div className="pt-28 flex flex-col items-center justify-center px-40">
      <Image
        src="/CircleText.webp"
        alt="circle"
        width={175}
        height={175}
        className="absolute right-56 top-56 scale-up-center"
      />
      <h1 className="text-9xl font-bold font-primary text-center leading-snug slide-in-bottom">
        Inspiring <br /> Self-Expression by
        <br /> Celebrating Creativity
      </h1>
      <p className="text-center text-3xl font-secondary my-10 px-18 slide-in-bottom">
        Society6 connects you to the best designs by independent artists from
        around the world to inspire
        <br /> you to create your unique space. We champion a wide array of
        artistic expressions, curating
        <br /> diverse styles and perspectives. We showcase carefully selected
        artwork that reflects current
        <br /> trends and pushes creative boundaries, providing space for
        artists to freely explore and share
        <br /> their creative vision.
      </p>
    </div>
  );
}
