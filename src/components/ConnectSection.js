import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function ConnectSection() {
  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram", color: "hover:text-[#E1306C]" },
    { icon: <FaFacebookF />, name: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: <FaTwitter />, name: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: <FaYoutube />, name: "YouTube", color: "hover:text-[#FF0000]" },
  ];

  return (
    <section className="relative flex justify-center px-4 py-16 md:py-20 bg-[#121212] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/bg-about.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#121212]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#121212_70%)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative bg-[#1A1A1A]/90 backdrop-blur-md text-white px-6 md:px-8 py-10 md:py-12 w-full max-w-4xl rounded-2xl shadow-2xl text-center border border-[#2A2A2A] transform transition-all duration-500 hover:shadow-[0_0_30px_5px_rgba(255,215,0,0.2)]">
        {/* Decorative Elements */}
        <div className="absolute -top-1 -left-1 w-2 md:w-3 h-2 md:h-3 bg-[#FFD700] rounded-full"></div>
        <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-[#FFD700] rounded-full"></div>
        
        {/* Heading Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] mb-3 md:mb-4">
            Connect With Us
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-white/80 mb-2">
            Get in touch with our specialist teams at
          </p>
          <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
            ALVYNE Consultancy
          </p>
        </div>

        {/* Contact Button */}
        <div className="mb-10 md:mb-12">
          <Link href="/Contact">
            <button className="relative px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-[#FFD700] text-white font-bold text-base md:text-lg rounded-full overflow-hidden group transition-all duration-500 hover:border-[#FFA500]">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              <span className="relative z-10 group-hover:text-[#121212] transition-all duration-300">
                Contact Us
              </span>
              <span className="absolute right-4 group-hover:right-6 transition-all duration-300">
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 md:gap-8">
          {socialLinks.map((social) => (
            <Link 
              href="#" 
              key={social.name}
              className={`text-xl md:text-2xl p-2 md:p-3 rounded-full bg-[#2A2A2A] transition-all duration-300 hover:-translate-y-2 ${social.color} hover:shadow-lg hover:shadow-[#FFD700]/20`}
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Subtle Animation */}
        <div className="absolute -bottom-6 md:-bottom-8 -right-6 md:-right-8 w-24 md:w-32 h-24 md:h-32 rounded-full bg-[#FFD700]/10 blur-xl animate-pulse"></div>
      </div>
    </section>
  );
}