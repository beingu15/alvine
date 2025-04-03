'use client';

export default function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-[#FFD700]">
      <h2 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">Send Us a Message</h2>
      <form>
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            className="w-full p-4 bg-white text-gray-800 border border-[#FFD700] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="w-full p-4 bg-white text-gray-800 border border-[#FFD700] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="w-full p-4 bg-white text-gray-800 border border-[#FFD700] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            placeholder="Subject"
          />
          <textarea
            className="w-full p-4 bg-white text-gray-800 border border-[#FFD700] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            rows="6"
            placeholder="Message"
          />
          <button
            type="submit"
            className="w-full py-4 bg-[#FFD700] text-white text-lg rounded-lg shadow-md hover:bg-[#E6C200] transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
