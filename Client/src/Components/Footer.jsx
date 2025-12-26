import React from 'react'
import { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Invalid input.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Invalid input.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Invalid input.';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    console.log('Form submitted:', formData);
  };

  return (
    <div id='footer' className="relative h-80% bg-[#1a5551]">
      {/* Topographic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20,60 Q40,40 60,60 T100,60 T140,60 T180,60" stroke="#86efac" strokeWidth="0.5" fill="none"/>
              <path d="M20,80 Q40,60 60,80 T100,80 T140,80 T180,80" stroke="#86efac" strokeWidth="0.5" fill="none"/>
              <path d="M20,100 Q40,80 60,100 T100,100 T140,100 T180,100" stroke="#86efac" strokeWidth="0.5" fill="none"/>
              <ellipse cx="100" cy="100" rx="30" ry="20" stroke="#86efac" strokeWidth="0.5" fill="none"/>
              <ellipse cx="100" cy="100" rx="50" ry="35" stroke="#86efac" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 relative z-10">
        <div className="flex justify-between items-start">
          {/* Left Side - Contact Info */}
          <div className="flex-1 pt-12">
            <h1 className="text-white text-7xl font-bold mb-20">Contact</h1>
            
            <div className="flex gap-24">
              {/* ME Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wider">ME</h3>
                <ul className="space-y-3">
                  <li><a href="#projects" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">Projects</a></li>
                  <li><a href="#skills" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">Skills</a></li>
                  <li><a href="#education" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">Education</a></li>
                </ul>
              </div>

              {/* GET IN TOUCH Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wider">GET IN TOUCH</h3>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* SOCIAL Section */}
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wider">SOCIAL</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/GODNSG0114" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/nikhil-god-780165296/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#d4ef3f] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/nikhil_19_04/" target='_blank' className="text-gray-300 hover:text-[#d4ef3f] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form in Circle */}
          <div className="relative">
            <div className="w-[380px] h-[380px] bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-full px-14">
                {/* Menu Icon */}
                <div className="flex justify-center mb-6">  
                  <div className="space-y-2">
                    <div className="w-12 h-1 bg-[#1a5551] rounded"></div>
                    <div className="w-12 h-1 bg-[#1a5551] rounded"></div>
                    <div className="w-12 h-1 bg-[#1a5551] rounded"></div>
                  </div>
                </div>

                <h2 className="text-[#1e3a47] text-3xl font-bold text-center mb-8">Say Hi!</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#1a5551] outline-none py-2 text-gray-700 placeholder-gray-400 transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#1a5551] outline-none py-2 text-gray-700 placeholder-gray-400 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-[#1a5551] outline-none py-2 text-gray-700 placeholder-gray-400 transition-colors"
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      className="bg-[#d4ef3f] text-[#1e3a47] font-bold px-16 py-3 rounded-full hover:bg-[#c5e030] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
