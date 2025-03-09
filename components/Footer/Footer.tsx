import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-white py-16 mt-auto">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Content */}
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">About GUPC</h3>
            <p className="mb-4 text-gray-300 leading-relaxed">
              A community-based organization from Green University of Bangladesh focused on promoting and practicing the art of photography, often involving activities such as photo walks, workshops, competitions, and exhibitions.
            </p>
            <p className="text-green-400 font-semibold">Founded: 2014</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📧</span>
                <span><strong>Email:</strong> photography.clubs@green.ac.bd</span>
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📱</span>
                <span><strong>Phone:</strong> 01990607209</span>
              </p>
              <p className="flex items-start text-gray-300">
                <span className="mr-2 mt-1">📍</span>
                <span>Purbachal American City, Kanchan, Rupganj, Narayanganj-1461, Dhaka, Bangladesh</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.facebook.com/wearegupc" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/gupc" target="_blank" rel="noopener noreferrer" 
                className="bg-gray-700 p-3 rounded-full hover:bg-green-600 transition-all duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
            
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link href="#portfolio" className="text-gray-300 hover:text-green-400 transition-colors">Portfolio</Link></li>
                <li><Link href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Green University Photography Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 