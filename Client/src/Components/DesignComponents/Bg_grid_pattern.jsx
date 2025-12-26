import React from 'react'

const Bg_grid_pattern = () => {
  return (
   <>
    {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-skills" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-skills)" />
        </svg>
      </div>
   </>
  )
}

export default Bg_grid_pattern