import { 
  FaClock, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaInstagram, FaWhatsapp 
} from "react-icons/fa";
import { firmInfo } from "@/data/firmData";

export default function SubHeader() {
  return (
    <div className="bg-[#050b14] text-gray-300 text-xs hidden md:flex items-center h-10 border-b border-white/10">
      <div className="container mx-auto flex justify-between px-6">
        {/* Left - Operating Info & Contact */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-300">
            <FaClock className="mr-2 text-sm text-[#FFD700]" /> 
            <span>{firmInfo.contact.workingHours}</span>
          </div>

          <a 
            href={`tel:${firmInfo.contact.phone}`} 
            className="flex items-center text-gray-300 hover:text-[#FFD700] transition border-l border-white/20 pl-6"
          >
            <FaPhoneAlt className="mr-2 text-sm text-[#FFD700]" /> 
            <span>{firmInfo.contact.phoneDisplay}</span>
          </a>

          <a 
            href={`mailto:${firmInfo.contact.email}`} 
            className="flex items-center text-gray-300 hover:text-[#FFD700] transition border-l border-white/20 pl-6"
          >
            <FaEnvelope className="mr-2 text-sm text-[#FFD700]" /> 
            <span>{firmInfo.contact.email}</span>
          </a>
        </div>

        {/* Right - Social Channels & Estd */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-[11px] font-medium tracking-wide">
            Estd. {firmInfo.establishedYear} | {firmInfo.tagline}
          </span>
          <div className="flex items-center space-x-2 pl-3 border-l border-white/20">
            <a
              href={firmInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
            >
              <FaLinkedinIn size={12} />
            </a>
            <a
              href={firmInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
            >
              <FaInstagram size={12} />
            </a>
            <a
              href={firmInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
            >
              <FaWhatsapp size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
