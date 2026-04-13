import React from 'react';

function HomasNavbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-10 bg-white rounded-t-[40px]">
      {/* Left: Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-bold text-gray-800">
        <a href="#home" className="hover:text-[#FFC353] transition-colors">Home</a>
        <a href="#blog" className="hover:text-[#FFC353] transition-colors">Blog</a>
        <a href="#course" className="hover:text-[#FFC353] transition-colors">Course</a>
      </div>

      {/* Center: Logo */}
      <div className="flex items-center gap-2 text-xl font-black text-black">
        <span className="text-[#FFC353] text-2xl">⌘</span> WOMAC
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm font-bold text-gray-800 hover:text-[#FFC353]">Log in</button>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default HomasNavbar;