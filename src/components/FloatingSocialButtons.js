"use client"
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocialButtons = () => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    {
      id: "phone",
      icon: <FaPhoneAlt size={20} />,
      color: "bg-green-600 hover:bg-green-700",
      href: "tel:+1234567890",
      tooltip: "Call Us"
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp size={20} />,
      color: "bg-green-500 hover:bg-green-600",
      href: "https://wa.me/1234567890",
      tooltip: "Chat on WhatsApp",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      id: "email",
      icon: <FaEnvelope size={20} />,
      color: "bg-red-500 hover:bg-red-600",
      href: "mailto:example@example.com",
      tooltip: "Send Email"
    }
  ];

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end">
      <motion.div 
        className="flex flex-col items-end space-y-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {expanded && (
          <AnimatePresence>
            {buttons.map((button) => (
              <motion.div
                key={button.id}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {hoveredButton === button.id && (
                  <motion.div 
                    className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {button.tooltip}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </motion.div>
                )}
                <a
                  href={button.href}
                  className={`${button.color} text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
                  target={button.target}
                  rel={button.rel}
                >
                  {button.icon}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {/* Main toggle button */}
        <motion.button
          className={`w-14 h-14 flex items-center justify-center rounded-full shadow-xl ${expanded ? 'bg-gray-700' : 'bg-[#FFD700] hover:bg-[#E6C200]'} text-white transition-all duration-300 transform hover:scale-110`}
          onClick={() => setExpanded(!expanded)}
          whileTap={{ scale: 0.9 }}
        >
          {expanded ? (
            <FaTimes size={20} />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingSocialButtons;