import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-20 right-2 p-2 z-50">
      {/* Phone Button */}
      <a
        href="tel:+1234567890"
        className="block bg-green-600 hover:bg-green-700 text-white w-12 h-12 flex items-center justify-center border-b border-gray-200 rounded-full"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 hover:bg-green-600 text-white w-12 h-12 flex items-center justify-center border-b border-gray-200 mt-2 rounded-full"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:example@example.com"
        className="block bg-red-500 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center mt-2 rounded-full border-b border-gray-200"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default FloatingSocialButtons;