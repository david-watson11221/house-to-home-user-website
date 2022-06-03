import React from "react";
import Banner from "./components/Banner";
// import CardsSection from "./components/ThreeBoxes";
// import Deals from "./components/Deals";
// import ManufacturersSlider from "./components/ManufacturersSlider";
import WhoWeAre from "./components/WhoWeAre";
// import Testimonials from "./components/Testimonials";
// import Blogs from "./components/Blogs";
import Seller from "./components/Seller";
import Cars from "./components/Cars";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <Cars />
      <Seller />
    </div>
  );
}
