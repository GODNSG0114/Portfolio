import React from 'react'
import Bg_grid_pattern from './DesignComponents/Bg_grid_pattern';
import {projects} from '../assets/assets';
const Projects = () => {

  return (
    <div id='projects' className=" relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    style={{
       backgroundColor: '#1e293b',
       backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239084a2' fill-opacity='0.09'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
     }}
    >
     
     <Bg_grid_pattern/>

      {/* Background Tech Icons Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="text-lime-400 text-9xl font-bold absolute top-20 left-10 transform rotate-12">
          {'</>'}
        </div>
        <div className="text-lime-400 text-7xl font-bold absolute top-40 right-32 transform -rotate-12">
          {'{}'}
        </div>
        <div className="text-lime-400 text-8xl font-bold absolute bottom-32 left-64 transform rotate-6">
          {'()'}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-24 py-16">
        {/* Title */}
        <h1 className="text-6xl lg:text-7xl font-black text-lime-400 mb-16 border-b-4 border-lime-400 inline-block pb-2">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12 max-w-7xl">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              {/* Project Image */}
              <div className="bg-black rounded-lg overflow-hidden shadow-2xl group ">
                <img src={project.image} alt="" />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                {/* Title */}
                <h2 className="text-4xl lg:text-5xl font-bold text-lime-400 border-b-2 border-lime-400 inline-block pb-2">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-lime-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-lime-400 font-mono text-sm">
                    <span className="text-slate-400">Tech -</span> {project.tech}
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-1">
                  <a target='_blank'
                    href={project.codeLink}
                    className="text-lime-400 border-b-2 border-dotted border-lime-400 hover:border-solid hover:text-lime-300 transition-all font-medium flex items-center gap-2"
                  >
                    Code
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a target='_blank'
                    href={project.demoLink}
                    className="text-lime-400 border-b-2 border-dotted border-lime-400 hover:border-solid hover:text-lime-300 transition-all font-medium flex items-center gap-2"
                  >
                    Deployment 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

         
        </div>
      </div>

    </div>
  );
}

export default Projects