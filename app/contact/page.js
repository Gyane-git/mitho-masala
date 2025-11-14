'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Spice Background */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1596040033229-a0b9c4f5c527?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-white tracking-wide transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Visit Us */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 relative inline-block">
                Visit Us
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-red-500"></div>
              </h2>
            </div>

            {/* Address */}
            <div className="group">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                Address:
              </h3>
              <p className="text-gray-700 leading-relaxed pl-4">
                Sakhuawa Rautahat Nepal
              </p>
            </div>

            {/* Email */}
            <div className="group">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                Email:
              </h3>
              <a 
                href="mailto:info@narpaspices.in" 
                className="text-gray-700 hover:text-red-500 transition-colors pl-4 inline-block"
              >
                info@deepmasala.com
              </a>
            </div>

            {/* Phone */}
            <div className="group">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                Phone:
              </h3>
              <a 
                href="tel:+919459453000" 
                className="text-gray-700 hover:text-red-500 transition-colors pl-4 inline-block"
              >
                +977 9821212332
              </a>
            </div>

            {/* Opening Hours */}
            <div className="group">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></span>
                Opening Hour:
              </h3>
              <div className="text-gray-700 pl-4 space-y-1">
                <p>Sun - Fri: 8am to 6.30pm GST</p>
                <p>Sat: Close</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Get In Touch Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-red-500"></div>
              </h2>
              <p className="text-gray-600 mb-8 mt-6">
                Our one-to-one support is a big part of our company. Contact us by phone or email to get help from our qualified team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </div>
                
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-5 py-4 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="group">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No *"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300 placeholder-gray-400"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-5 py-4 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-red-500 outline-none transition-all duration-300 resize-none placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-full font-bold text-white text-lg shadow-lg transform transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 hover:bg-green-600 scale-105'
                    : 'bg-red-500 hover:bg-red-600 hover:scale-105 hover:shadow-2xl'
                } disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent Successfully!
                  </span>
                ) : (
                  'SEND'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className={`mt-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <iframe
              src="https://www.google.com/maps/place/Premdeep+Sadan/@26.8813655,85.2845808,17z/data=!3m1!4b1!4m6!3m5!1s0x39ec97006ee0d875:0x649fc8736d2953ef!8m2!3d26.8813608!4d85.2894517!16s%2Fg%2F11wmw4k6kr?hl=en&entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Narpa Spices Location"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}