

import { FaClock, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";

export default function SubHeader() {
  return (
    <div className="bg-green-600 text-white text-sm hidden md:flex items-center h-12">
      <div className="container mx-auto flex justify-between px-4">
        {/* Left - Contact Info */}
        <div className="flex space-x-6 font-semibold">
          <a href="#" className="flex items-center border-l border-white/30 pl-5">
            <FaClock className="mr-2 text-lg" /> Mon-Fri 09:00-17:00
          </a>
          <a href="#" className="flex items-center border-x border-white/30 px-5">
            <FaPhone className="mr-2 text-lg" /> 090-080-0760
          </a>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex space-x-3">
          {[
            { icon: FaFacebook, name: "facebook" },
            { icon: FaTwitter, name: "twitter" },
            { icon: FaLinkedin, name: "linkedin" },
            { icon: FaBehance, name: "behance" }
          ].map(({ icon: Icon, name }, index) => (
            <a
              key={name}
              href="#"
              className="w-8 h-8 flex items-center justify-center text-white hover:opacity-75"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
