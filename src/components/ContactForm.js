'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { firmInfo } from '@/data/firmData';

export default function ContactForm({ initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: initialService || 'Incorporation & Setup',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceCategory: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceCategory: 'Incorporation & Setup',
          message: ''
        });
      }, 4000);
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0e1626] p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/10 hover:border-[#FFD700]/30 transition-all text-white"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#FFD700] rounded-xl shadow-md text-black">
          <FaPaperPlane className="text-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">
            Send an Inquiry
          </h3>
          <p className="text-xs text-gray-400">
            Tell us about your business or tax requirements
          </p>
        </div>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12 bg-white/[0.02] rounded-2xl border border-white/10"
        >
          <div className="mx-auto flex items-center justify-center h-16 w-16 bg-[#FFD700]/20 rounded-full mb-4 border border-[#FFD700]/40">
            <FaCheck className="text-[#FFD700] text-2xl" />
          </div>
          <h4 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h4>
          <p className="text-gray-300 text-sm max-w-sm mx-auto">
            Thank you for reaching out to {firmInfo.name}. One of our partners will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#080d16] text-white border border-white/15 rounded-xl focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm outline-none transition"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#080d16] text-white border border-white/15 rounded-xl focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm outline-none transition"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#080d16] text-white border border-white/15 rounded-xl focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm outline-none transition"
                placeholder="+91 90000 00000"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Area of Interest *
              </label>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#080d16] text-white border border-white/15 rounded-xl focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm outline-none transition cursor-pointer"
              >
                <option value="Incorporation & Setup">Incorporation & Business Setup</option>
                <option value="Direct Tax & ITR">Direct Tax & ITR Filing</option>
                <option value="GST Services">GST Registration & Compliance</option>
                <option value="Corporate Compliance">Corporate & ROC Compliance</option>
                <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                <option value="Virtual CFO & Advisory">Virtual CFO & Financial Advisory</option>
                <option value="Startup Mentoring">Startup Advisory & Fundraising</option>
                <option value="Audit Support">Audit Support & Assurances</option>
                <option value="General Consultation">General Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Message or Specific Requirements *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-4 bg-[#080d16] text-white border border-white/15 rounded-xl focus:border-[#FFD700] focus:ring-1 focus:ring-[#FFD700] text-sm outline-none transition"
              placeholder="Tell us about your business, current status, or any immediate filing deadlines..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
              isSubmitting 
                ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
                : 'bg-[#FFD700] hover:bg-[#E6C200] text-black hover:scale-[1.01]'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <FaPaperPlane />
                <span>Submit Inquiry to ALVYNE</span>
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-xs text-gray-400">
        <p>🔒 Your financial data and consultation details are kept strictly confidential.</p>
      </div>
    </motion.div>
  );
}