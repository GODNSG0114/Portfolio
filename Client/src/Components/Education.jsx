import React from "react";
import Bg_grid_pattern from "./DesignComponents/Bg_grid_pattern";
import { EducationsDetail } from "../assets/assets";

const Education = () => {
  return (
    <div id="education" className="  relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    style={{
       backgroundColor: '#1e293b',
       backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239084a2' fill-opacity='0.09'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
     }}
    >
      <Bg_grid_pattern/>

      {/* Content */}
      <div className="relative z-10 px-8 lg:px-24 py-16">
        {/* Title */}
        <h1 className="text-6xl lg:text-7xl font-black text-lime-400 mb-20 border-b-4 border-lime-400 inline-block pb-2">
          Education
        </h1>

        {/* Education Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1600px]">

          {/* Card 1 */}
          {EducationsDetail.map((detail)=>(

          <div id={`Education_detail_id_number_${detail.id}`} className="group relative bg-slate-900/50 backdrop-blur-sm border-2 border-lime-400/70 rounded-3xl p-8 hover:scale-[1.02] hover:border-lime-300 transition-all duration-300">
            <h2 className="text-3xl font-bold text-lime-400 mb-2">
              {detail.name}
            </h2>

            <p className="text-lime-300 mb-4 text-lg">
              {detail.TimeSpan}
            </p>

            <ul className="space-y-3 text-gray-300">
              <li> {detail.Class}</li>
              <li> {detail.Grade}</li>
            </ul>

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-lime-400 to-transparent rounded-3xl pointer-events-none" />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
