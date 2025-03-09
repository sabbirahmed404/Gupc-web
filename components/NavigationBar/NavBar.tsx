import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoSrc, setLogoSrc] = useState("/assets/logo(white).svg");

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to update colors based on scroll position
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor("#ffffff");
      setTextColor("#000000");
      setLogoSrc("/assets/logo(black).svg");
    } else {
      setColor("transparent");
      setTextColor("#ffffff");
      setLogoSrc("/assets/logo(white).svg");
    }
  };

  useEffect(() => {
    // Call changeColor immediately on mount to set initial state correctly
    changeColor();
    
    // Add event listener for scroll
    window.addEventListener("scroll", changeColor);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className="w-full transition-all duration-300" 
         style={{
           backgroundColor: color,
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           zIndex: 9999,
           margin: 0,
           padding: 0,
           border: 'none',
           boxShadow: 'none',
           height: 'auto'
         }}>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <div className="flex items-center">
            <div className="h-16 w-16 mr-3">
              <img 
                src={logoSrc} 
                alt="GUPC Logo" 
                className="w-full h-full transition-all duration-300"
              />
            </div>
            <h1 style={{ color: textColor }} className="font-bold text-4xl">
              GUPC
            </h1>
          </div>
        </Link>
        <ul style={{ color: textColor }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/committee">Committee</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button - Updated with conditional rendering */}
        <div onClick={handleNav} className="block sm:hidden z-20">
          {nav ? (
            <AiOutlineClose size={24} style={{ color: "white" }} /> // Always white for visibility
          ) : (
            <AiOutlineMenu size={20} style={{ color: textColor }} />
          )}
        </div>
        
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
              : "sm:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
          }
        >
          <ul>
            <li className="flex justify-center items-center mb-8">
              <div className="h-16 w-16 mr-3">
                <img 
                  src="/assets/logo(white).svg" 
                  alt="GUPC Logo" 
                  className="w-full h-full transition-all duration-300"
                />
              </div>
              <h2 className="text-5xl font-bold text-white">GUPC</h2>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/committee">Committee</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
