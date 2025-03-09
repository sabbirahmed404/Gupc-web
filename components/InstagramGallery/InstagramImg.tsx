import React from "react";
import { FaInstagram } from "react-icons/fa";

interface Props {
  socialImg: any;
}

const InstagramImg = ({ socialImg }: Props) => {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={socialImg.src}
        alt="Instagram gallery image"
        className="w-full h-full object-cover aspect-square"
      />
      <div className="flex justify-center items-center absolute inset-0 hover:bg-black/50 group transition-all duration-300">
        <p className="text-gray-300 hidden group-hover:block transform transition-all duration-300">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
