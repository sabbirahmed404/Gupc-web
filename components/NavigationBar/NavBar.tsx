import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoSrc, setLogoSrc] = useState("/assets/logo(white).svg");
  const [footerActive, setFooterActive] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const router = useRouter();

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
    
    // Define function to check if footer is in viewport
    const checkFooterInView = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // If footer is in viewport (or close to it)
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setFooterActive(isVisible);
      } else {
        setFooterActive(false);
      }
    };
    
    // Define function to check if gallery is in viewport
    const checkGalleryInView = () => {
      const gallery = document.getElementById('gallery');
      if (gallery) {
        const rect = gallery.getBoundingClientRect();
        // If gallery is in viewport (or close to it)
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setGalleryActive(isVisible);
      } else {
        setGalleryActive(false);
      }
    };
    
    // Add event listeners for scroll
    window.addEventListener("scroll", checkFooterInView);
    window.addEventListener("scroll", checkGalleryInView);
    
    // Run once on mount
    checkFooterInView();
    checkGalleryInView();
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", checkFooterInView);
      window.removeEventListener("scroll", checkGalleryInView);
    };
  }, []);

  // Check if the link is active
  const isActive = (path: string) => {
    // For home page
    if (path === "/" && router.pathname === "/") {
      return true;
    }
    // For other pages (handle partial matches for hash routes)
    if (path !== "/" && path !== "#footer" && path !== "#gallery" && router.pathname.startsWith(path)) {
      return true;
    }
    // For footer section - use the scroll position state instead of URL
    if (path === "#footer") {
      return footerActive;
    }
    // For gallery section - use the scroll position state instead of URL
    if (path === "#gallery" || path === "/#gallery") {
      return galleryActive;
    }
    // For hash routes on specific pages
    if (path.includes('#') && router.asPath === path) {
      return true;
    }
    return false;
  };

  // Function to scroll to footer
  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNav(); // Close mobile menu if open
    
    // Check if the footer exists on the current page
    const footer = document.getElementById('footer');
    
    if (footer) {
      // If footer exists on current page, scroll to it
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If footer doesn't exist on current page, navigate to home and then scroll
      router.push('/').then(() => {
        setTimeout(() => {
          const homeFooter = document.getElementById('footer');
          if (homeFooter) {
            homeFooter.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Increased timeout to ensure page loads
      });
    }
  };

  // Function to scroll to gallery
  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNav(); // Close mobile menu if open
    
    // Check if the gallery exists on the current page
    const gallery = document.getElementById('gallery');
    
    if (gallery) {
      // If gallery exists on current page, scroll to it
      gallery.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If gallery doesn't exist on current page, navigate to home and then scroll
      router.push('/').then(() => {
        setTimeout(() => {
          const homeGallery = document.getElementById('gallery');
          if (homeGallery) {
            homeGallery.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Increased timeout to ensure page loads
      });
    }
  };

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
            <div className="h-20 w-20 mr-3">
              <img 
                src={logoSrc} 
                alt="GUPC Logo" 
                className="w-full h-full transition-all duration-300"
              />
            </div>
          </div>
        </Link>
        <ul style={{ color: textColor }} className="hidden sm:flex">
          <li className="p-4 relative">
            <Link href="/" className={isActive('/') ? 'font-bold' : ''}>Home</Link>
            {isActive('/') && (
              <span 
                className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300" 
                style={{ backgroundColor: textColor }}
              ></span>
            )}
          </li>
          <li className="p-4 relative">
            <a href="#gallery" onClick={scrollToGallery} className={galleryActive ? 'font-bold' : ''}>Gallery</a>
            {galleryActive && (
              <span 
                className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300" 
                style={{ backgroundColor: textColor }}
              ></span>
            )}
          </li>
          <li className="p-4 relative">
            <Link href="/committee" className={isActive('/committee') ? 'font-bold' : ''}>Committee</Link>
            {isActive('/committee') && (
              <span 
                className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300" 
                style={{ backgroundColor: textColor }}
              ></span>
            )}
          </li>
          <li className="p-4 relative">
            <a href="#footer" onClick={scrollToFooter} className={footerActive ? 'font-bold' : ''}>Contact</a>
            {footerActive && (
              <span 
                className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300" 
                style={{ backgroundColor: textColor }}
              ></span>
            )}
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
        
        {/* Mobile Menu - Updated with active indicators */}
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
              className={`p-4 text-4xl hover:text-gray-500 ${isActive('/') ? 'text-white font-bold' : 'text-gray-300'}`}
            >
              <Link href="/">Home</Link>
              {isActive('/') && <span className="block mx-auto w-12 h-0.5 bg-white mt-2"></span>}
            </li>
            <li
              onClick={scrollToGallery}
              className={`p-4 text-4xl hover:text-gray-500 ${galleryActive ? 'text-white font-bold' : 'text-gray-300'}`}
            >
              <a href="#gallery">Gallery</a>
              {galleryActive && <span className="block mx-auto w-12 h-0.5 bg-white mt-2"></span>}
            </li>
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-gray-500 ${isActive('/committee') ? 'text-white font-bold' : 'text-gray-300'}`}
            >
              <Link href="/committee">Committee</Link>
              {isActive('/committee') && <span className="block mx-auto w-12 h-0.5 bg-white mt-2"></span>}
            </li>
            <li
              onClick={scrollToFooter}
              className={`p-4 text-4xl hover:text-gray-500 ${footerActive ? 'text-white font-bold' : 'text-gray-300'}`}
            >
              <a href="#footer">Contact</a>
              {footerActive && <span className="block mx-auto w-12 h-0.5 bg-white mt-2"></span>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
