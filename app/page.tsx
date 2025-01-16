import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextSlider from "./components/TextSlider";
import { HeroImage, textSlider1 } from "./Text";

export default function Home() {
  return (
    <div className="bg-white2 overflow-hidden">
      <Header />
      <Carousel />
      <TextSlider text={textSlider1} />
      <Hero images={HeroImage} />
      <div className="w-full h-screen"></div>
    </div>
  );
}
