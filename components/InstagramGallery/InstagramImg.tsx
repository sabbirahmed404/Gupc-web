import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

interface Props {
  socialImg: any;
}
const InstagramImg = ({ socialImg }: Props) => {
  return (
    <div className="relative h-full">
      <div className="aspect-square w-full h-full overflow-hidden">
        <Image
          src={socialImg}
          alt="Instagram gallery image"
          className="w-full h-full object-cover"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
