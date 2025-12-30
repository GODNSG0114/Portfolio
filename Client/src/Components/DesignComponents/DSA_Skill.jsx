import axios from 'axios';
import React, { useState, useEffect } from 'react'

const DSA_Skill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchSkills = async () => {
    try {
      const data = await axios.get('https://alfa-leetcode-api.onrender.com/GODNSG0114/skill');
      console.log(data.data)
      const merged = [...data.data.fundamental, ...data.data.intermediate, ...data.data.advanced];
      setSkills(merged);
    } catch (error) {
      console.error('Error fetching DSA skill data:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-lime-400 mb-8">DSA Topics Covered - </h2>
        {/* Skills Grid */}
        {
          loading ? (
            <div className="text-gray-500">Loading stats...</div>
          ) : (
            <> <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 max-w-[1600px]">
              {skills.map((skill, index) => (
                <div
                  key={skill.id}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border-2 border-lime-400/80 rounded-2xl p-4 hover:bg-slate-800/70 hover:border-lime-300 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {/* Background tech name watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                    <span className="text-4xl font-black text-lime-400 whitespace-nowrap">
                      {skill.tagName}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Number */}
                    <p className="text-lime-400 font-mono text-xs mb-2">
                      {String(index + 1).padStart(2, '0')}.
                    </p>

                    {/* Skill Name and Problems Solved */}
                    <div className='flex flex-col gap-1'>
                      <h3 className="text-lime-400 text-base lg:text-lg font-bold group-hover:text-lime-300 transition-colors">
                        {skill.tagName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lime-400/60 text-xs">Solved:</span>
                        <span className="text-lime-300 text-lg font-black bg-lime-400/10 px-2 py-0.5 rounded-lg border border-lime-400/30">
                          {skill.problemsSolved}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Hover effect glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-lime-400 to-transparent rounded-2xl pointer-events-none" />
                </div>
              ))}
            </div>
            </>)}
      </div>
    </>
  )
}

export default DSA_Skill