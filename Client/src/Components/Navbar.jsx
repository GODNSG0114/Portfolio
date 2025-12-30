import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {

   const [dotEffect ,setdoteffect] = useState('');

   const scrollTo = (id) => {
    setdoteffect(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed bottom-0.5 lg:bottom-12 lg:left-1/2 transform lg:-translate-x-1/2 z-20 " >
        <nav className="bg-slate-800/80 backdrop-blur-lg rounded-full px-2 py-2 shadow-2xl border border-slate-700/50">
          <ul className="flex items-center gap-3 lg:gap-4">

            {/* Header / Home */}
            <li>
              <button
                onClick={() => scrollTo('header')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"   //text-lime-400
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              { dotEffect==='header' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* About */}
            <li>
              <button
                 onClick={() => scrollTo('about')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                
                { dotEffect==='about' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* Experience */}
            <li>
              <button
                onClick={() => scrollTo('exprerience')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
               { dotEffect==='exprerience' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* Projects */}
            <li>
              <button
                 onClick={() => scrollTo('projects')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                { dotEffect==='projects' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* Skills */}
            <li>
              <button
                 onClick={() => scrollTo('skills')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
               { dotEffect==='skills' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* Education */}
            <li>
              <button
                 onClick={() => scrollTo('education')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13"
                  />
                </svg>
                { dotEffect==='education' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

            {/* Footer , Contact */}
            <li>
              <button
                 onClick={() => scrollTo('footer')}
                className="text-slate-400 hover:text-lime-300 transition-colors p-2 relative"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
               { dotEffect==='footer' && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lime-400 rounded-full"></div>}
              </button>
            </li>

          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
