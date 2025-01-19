import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LearnMore from "./components/LearnMore";
import ShopByRoom from "./components/ShopByRoom";
import TextSlider from "./components/TextSlider";
import TextSliderBig from "./components/TextSliderBig";
import { HeroImage, textSlider1 } from "./Text";

export default function Home() {
  return (
    <div className="bg-white2 overflow-hidden">
      <Header />
      <Carousel />
      <TextSlider text={textSlider1} />
      <Hero images={HeroImage} />
      <LearnMore />
      <ShopByRoom />
      <TextSliderBig />
      <Gallery />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}
