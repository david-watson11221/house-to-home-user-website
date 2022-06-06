import React from "react";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import FindARetialer from "./components/FindARetialer";
import Floorvana from "./components/Floorvana";
import HowItWorks from "./components/HowItWorks";
import FeelInspired from "./components/Inspired";
import OrderASample from "./components/OrderASample";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeelInspired />
      <HowItWorks />
      <Floorvana />
      <OrderASample />
      <FindARetialer />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
