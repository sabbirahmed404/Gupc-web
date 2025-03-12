import React from "react";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

interface Props {
  heading: string;
  message: string;
  buttonText?: string;
  buttonLink?: string;
  contentPaddingTop?: string;
  useTypewriter?: boolean;
}

const Hero = ({ 
  heading, 
  message, 
  buttonText = "Here", 
  buttonLink = "/#portfolio",
  contentPaddingTop = "0",
  useTypewriter = false
}: Props) => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img" style={{ marginTop: 0, paddingTop: 0 }}>
      <div className="absolute inset-0 bg-black/70 z-[1]" />
      <div 
        className="relative p-10 text-center text-white z-[2] max-w-[800px] mx-auto"
        style={{ paddingTop: contentPaddingTop }}
      >
        {useTypewriter ? (
          <h2 className="text-4xl md:text-5xl font-bold">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(heading)
                  .pauseFor(3000)  // Pause for 3 seconds after typing
                  .deleteAll(30)   // Delete at a moderate speed
                  .pauseFor(1000)  // Pause for 1 second before retyping
                  .start();        // Start the loop
              }}
              options={{
                loop: true,
                cursor: "|",
                delay: 80
              }}
            />
          </h2>
        ) : (
          <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
        )}
        <p className="py-5 text-lg md:text-xl">{message}</p>
        {buttonText && (
          <Link href={buttonLink} passHref>
            <button className="px-8 py-2 border hover:bg-white hover:text-black transition-all duration-300">{buttonText}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
