import React from 'react'
import Bg_grid_pattern from './DesignComponents/Bg_grid_pattern';

const AboutMe = () => {

    const skills = [
    { id: 1, name: "React" },
    { id: 3, name: "MongoDB" },
    { id: 4, name: "Python" },
    { id: 5, name: "Express" },
    { id: 6, name: "SQL" },
    { id: 7, name: "HTML" },
    { id: 8, name: "CSS" },
    { id: 9, name: "JavaScript" },
    { id: 11, name: "Java" },
    { id: 12, name: "Node.js" },
    { id: 14, name: "Git" },
    { id: 16, name: "Tailwind" },
  ] 

  return (
    <div id='about' className=" relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      style={{
        backgroundColor: '#1e293b',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239084a2' fill-opacity='0.09'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}
    >
      <Bg_grid_pattern />

      {/* Decorative Shapes - Top Right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64">
          <div className="absolute top-4 right-48 w-16 h-16 bg-orange-500 rounded-sm opacity-70  md:block hidden"></div>
          <div className="absolute top-8 right-32 w-20 h-20 border-4 border-teal-400 rounded-full opacity-60  md:block hidden"></div>
          <div className="absolute top-20 right-64 w-12 h-12 bg-orange-400 rounded-full opacity-50  md:block hidden"></div>
          <div className="absolute top-32 right-48 w-24 h-24 border-4 border-yellow-400 rounded-full opacity-40  md:block hidden"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-24 py-16">
        <div className="max-w-6xl">
          {/* Title */}
          <h1 className="text-6xl lg:text-7xl font-black text-lime-400 mb-8 border-b-4 border-lime-400 inline-block pb-2">
            About Me
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-6 text-lime-400 text-lg lg:text-xl leading-relaxed">
            <p>
              Hey there! I'm a CSE student at Walchand College of Engineering, Sangli, where code meets creativity. My journey in tech started with a fascination for how things work under the hood, which led me to dive deep into web technologies and building user-centric applications. As an ex-member of the WCE ACM chapter, I've collaborated with brilliant minds, tackled challenging problems, and discovered my love for both DSA and web development.
            </p>

            <p>
              I believe great software is built at the intersection of logic and design. When I'm not debugging code or optimizing algorithms, you'll find me experimenting with modern web technologies, building side projects. My goal is simple: create impactful digital experiences that solve real problems while continuously pushing my boundaries as a developer.</p>
            <p >
              Technologies I've learned and continuously explore :
            </p>
            {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-[1600px]">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border-2 border-lime-400/80 rounded-3xl p-6 hover:bg-slate-800/70 hover:border-lime-300 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Background tech name watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <span className="text-6xl font-black text-lime-400 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Number */}
                <p className="text-lime-400 font-mono text-sm mb-3">
                  {String(index + 1).padStart(2, '0')}.
                </p>
                
                {/* Skill Name */}
                <h3 className="text-lime-400 text-xl lg:text-2xl font-bold group-hover:text-lime-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-lime-400 to-transparent rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe