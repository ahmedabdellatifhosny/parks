// import Platform from "../components/Platform";
import Hero from "../components/Hero";
import Nearest from "../components/Nearest";
import "bootstrap/dist/css/bootstrap.min.css";
import FamousParks from "../components/FamousParks";
import News from "../components/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddNewPark from "@/components/AddNewPark";
import Parks from "../components/Parks";
import Apps from "../components/Apps";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Platform /> */}
      <Nearest />
      <News />
      <FamousParks />
      <AddNewPark />
      <Parks />
      <Apps />
    </>
  );
}
