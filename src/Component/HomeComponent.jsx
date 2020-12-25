import React from "react";
import Slider from "./Home/Slider/Slider";
import AboutHotel from "./Home/AboutHotel/AboutHotel";
import ServicesPart from "./Home/ServicesPart/ServicesPart";
import DiscoveryPart from "./Home/DiscoveryPart/DiscoveryPart";
import ClientReview from "./Home/ClientReview/ClientReview";
import SellingPart from "./Home/SellingPart/SellingPart";
const HomeComponent = () => {
  return (
    <div>
      <Slider />

      <AboutHotel />
      <SellingPart />
      <ServicesPart />
      <DiscoveryPart />
      <ClientReview />
    </div>
  );
};

export default HomeComponent;
