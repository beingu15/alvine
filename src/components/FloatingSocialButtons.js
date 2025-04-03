import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-20 right-2 p-2 z-50">
      {/* Facebook Button */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-blue-500 hover:bg-blue-600 text-white w-12 h-12 flex items-center justify-center border-b border-gray-200 rounded-full"
      >
        <FaFacebookF size={24} />
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-pink-500 hover:bg-pink-600 text-white w-12 h-12 flex items-center justify-center border-b border-gray-200 mt-2 rounded-full"
      >
        <FaInstagram size={24} />
      </a>

      {/* YouTube Button */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-red-500 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center mt-2 rounded-full border-b border-gray-200 "
      >
        <FaYoutube size={24} />
      </a>
    </div>
  );
};

export default FloatingSocialButtons;
