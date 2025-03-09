import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface Props {
  slides: any;
}

const Slider = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center mb-2">Gallery</h1>
      <div className="relative flex justify-center">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current ? "opacity-[1] ease-in w-full" : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[10px] md:left-[30px] text-black/90 bg-white/50 rounded-full cursor-pointer select-none z-[2] hover:text-black hover:bg-white/80 transition-all"
                size={30}
              />
              {index === current && (
                <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt="Slider image"
                    className="h-full w-auto max-w-full object-contain mx-auto"
                  />
                </div>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[10px] md:right-[30px] text-black/90 bg-white/50 rounded-full cursor-pointer select-none z-[2] hover:text-black hover:bg-white/80 transition-all"
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
