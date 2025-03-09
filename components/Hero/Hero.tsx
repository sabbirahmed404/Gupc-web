import React from "react";
import Link from "next/link";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      <div className="relative p-5 text-center text-white z-[2] max-w-[800px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-lg md:text-xl">{message}</p>
        <Link href="/#portfolio" passHref>
          <button className="px-8 py-2 border hover:bg-white hover:text-black transition-all duration-300">Here</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
