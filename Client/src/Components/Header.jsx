import React, { useEffect, useState } from 'react'
import Bg_grid_pattern from './DesignComponents/Bg_grid_pattern';
import axios from 'axios'

const Header = () => {

  const [bio, setBio] = useState();

  const GithubCall = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        }
      });
      setBio(data.bio);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  }


  return (
    <div id='header'
      className="  relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >

      <Bg_grid_pattern />


      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-4 right-48 w-32 h-32 border-8 border-teal-400 rounded-full opacity-80 animate-pulse"
          style={{ animationDuration: '3s' }}></div>

        <div className="absolute top-8 right-12 w-40 h-40 border-8 border-orange-400 rounded-full opacity-70"
          style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>

        <div className="absolute top-64 right-32 w-36 h-36 border-8 border-teal-300 rounded-full opacity-60"
          style={{ clipPath: 'polygon(0% 50%, 0% 100%, 100% 100%, 100% 50%)' }}></div>

        <div className="absolute top-12 right-80 w-1 h-64 bg-gradient-to-b from-teal-400 to-transparent opacity-70"></div>

        <div className="absolute top-80 right-64 w-24 h-24 border-8 border-orange-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDuration: '4s' }}></div>

        <div className="absolute bottom-32 right-24 w-32 h-48 border-8 border-orange-400 rounded-3xl opacity-50"></div>

        <div className="absolute bottom-8 right-96 w-48 h-32 border-8 border-teal-400 rounded-full opacity-60"
          style={{ clipPath: 'ellipse(40% 60% at 50% 40%)' }}></div>

        <div className="absolute bottom-0 right-0 w-64 h-32 border-b-8 border-yellow-400 rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="  relative z-10 flex flex-col justify-center min-h-screen px-12 ">
        <div className="  pl-10 max-w-4xl">
          {/* Greeting */}
          <p className="text-lime-400 text-lg mb-6 font-light  ">Hi there, i'm</p>

          {/* Name */}
          <h1 className=" text-7xl lg:text-8xl font-black text-lime-400 mb-4 tracking-tight">
            <span>God</span><br /> <span>Nikhil Suresh</span>
          </h1>


          {/* Title */}
          <p className="text-lime-400 text-xl lg:text-2xl font-light mb-8">
            Web Developer | DSA | Ex- ACM member ( WCE chapter )
          </p>

          {bio && <div className="text-lime-400 text-xl lg:text-2xl font-light mt-5 mb-5">
            <p>Hola, i'm <br />{bio}</p>
          </div>}

          {bio && <div className="text-lime-400 text-xl lg:text-2xl font-light mt-5 mb-2">
            <p>Tell About Yourself</p>
          </div>}
     
          {/* Buttons */}
          <div className="flex gap-6">
            <button onClick={GithubCall} className="bg-lime-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50">
              Say Hi
            </button>
            <button className="bg-lime-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50">
              Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header