import Image from "next/image";
import { NumberTicker } from "./magicui/number-ticker";

export default function BusinessGrowthSection() {
  return (
    <section className="relative bg-black text-white py-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/slide1.jpg" // Update with your actual image path
          alt="Background"
          fill
          className="opacity-30 object-cover"
        />
      </div>

      {/* Content + Stats Grid Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content Section */}
        <div className="md:w-1/2">
          <h4 className="text-sm uppercase tracking-wider text-gray-400">
            Expert Chartered Accountants & Business Advisors
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Financial solutions tailored for your {" "}
            <span className="text-green-500">business success</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Our team of certified Chartered Accountants provides strategic financial insights, ensuring compliance, efficiency, and growth for businesses of all sizes.
          </p>
          <p className="mt-2 text-gray-300">
            From tax planning and auditing to investment strategies and business consulting, we help you navigate financial complexities with ease.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-600 transition">
            Learn More
          </button>
        </div>

        {/* Right Stats Grid - Responsive */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0 md:ml-10 w-full">
          {[
            { number: 500, label: "Businesses Assisted" },
            { number: 1500, label: "Financial Reports Filed" },
            { number: 850, label: "Tax Strategies Implemented" },
            { number: 5, label: "Years of Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-60 p-6 text-center rounded-lg"
            >
              {/* Number Ticker */}
              <NumberTicker
                value={stat.number}
                duration={2.5} // Adjust the animation duration
                className="text-3xl font-bold text-green-400"
              />
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
