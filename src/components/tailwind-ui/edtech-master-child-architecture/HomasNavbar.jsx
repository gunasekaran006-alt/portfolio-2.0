import React from 'react';

function HomasNavbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-10 bg-white rounded-t-[40px] border-b border-gray-100">
      
      {/* Left: Navigation Links with Animated Underline */}
      <div className="hidden md:flex gap-8 text-sm font-bold text-gray-800">
        {['Home', 'Blog', 'Course'].map((item, i) => (
          <a key={i} href={`#${item.toLowerCase()}`} className="relative group hover:text-[#FFC353] transition-colors duration-300">
            {item}
            {/* ⚡ Animated Underline Logic */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFC353] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Center: Logo with slight pulse */}
      <div className="flex items-center gap-2 text-xl font-black text-black cursor-pointer hover:scale-105 transition-transform duration-300">
        <span className="text-[#FFC353] text-2xl animate-pulse">⌘</span> WOMAC
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm font-bold text-gray-800 hover:text-[#FFC353] transition-colors duration-300">
          Log in
        </button>
        {/* ⚡ Sign Up button becomes yellow and lifts up on hover */}
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#FFC353] hover:text-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default HomasNavbar;