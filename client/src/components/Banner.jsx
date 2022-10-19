import React from "react";
import { sliderItems } from "../sliderItems";
import Carousel from "react-elastic-carousel";

const BB = () => {
  return (
    <Carousel>
      {sliderItems.map((slide) => (
        <div
          className="w-[100vw] h-[70vh] flex items-center overflow-hidden relative"
          key={slide.id}
        >
          <div className="h-full flex flex-1">
            <img className="w-full object-cover" src={slide.img} alt="" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BB;
