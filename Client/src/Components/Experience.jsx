import React from 'react'
import Bg_grid_pattern from './DesignComponents/Bg_grid_pattern';
import { ExperienceDetails } from '../assets/assets'; 
const Experience = () => {
  return (
    <div id='exprerience' className=" relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      style={{
       backgroundColor: '#1e293b',
       backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239084a2' fill-opacity='0.09'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
     }}
    >
     <Bg_grid_pattern />

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-24 py-16">
        <div className="max-w-6xl">
          {/* Title */}
          <h1 className="text-6xl lg:text-7xl font-black text-lime-400 mb-16 border-b-4 border-lime-400 inline-block pb-2">
           Community Experience
          </h1>

          {/* Experience Entry */}
          {ExperienceDetails.map((detail)=>(
          <div  className="border-l-4 border-lime-400 pl-10 pt-6 relative">
            {/* Community and tenure */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-lime-400 mb-2 lg:mb-0">
                {detail.Name}
              </h2>
              <span className="text-lime-400 text-lg lg:text-xl font-mono">
                {detail.Tenure}
              </span>
            </div>
            
            {/* Position */}
            <p className="text-teal-400 text-lg mb-6 font-mono">
              {detail.Position}
            </p>
            
            {/* Work */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
             <ul className=' space-y-0'>  
              <li className="text-lime-400 text-lg leading-relaxed">
                 {detail.Description[1]}
                </li>
                <li className="text-lime-400 text-lg leading-relaxed">
                 {detail.Description[2]}
                </li>
                <li className="text-lime-400 text-lg leading-relaxed mb-10">
                 {detail.Description[3]}
                </li>
              </ul> 
              </div>
            </div>
          </div>
          ))}
 
        </div>
      </div>
    </div>
  );
}

export default Experience