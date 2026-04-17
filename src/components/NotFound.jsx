import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    // min-h-[85vh] ensures the content is vertically centered
    <div className='flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-6 gap-12 lg:gap-24 max-w-7xl mx-auto'>
      
      {/* 🖼️ GIANT IMAGE SECTION */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
        <img 
          src="https://i.pinimg.com/736x/0b/98/53/0b985377605d49642ef3706bed7b782a.jpg" 
          alt="404 Page Not Found - Dinosaur" 
          // ⚡ Increased image size to 650px for a massive, premium look
          className='w-full max-w-[380px] md:max-w-[550px] lg:max-w-[650px] rounded-3xl shadow-[0_0_60px_rgba(39,200,245,0.1)] object-contain transition-transform hover:scale-105 duration-700'
        />
      </div>

      {/* 📝 TEXT & BUTTON SECTION */}
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-12 md:mt-0'>
        
        {/* ⚡ 'text-balance' ensures the 3 lines are even. 'mb-16' adds the big gap you wanted */}
        <p className='text-slate-400 text-sm sm:text-base md:text-[20px] mb-16 max-w-[500px] leading-[1.8] text-balance font-medium opacity-90'>
          The neural pathway you are trying to access does not exist or has been moved to a different sector. You are currently floating in the digital void.
        </p>
        
        {/* ⚡ Premium Neon Button */}
        <Link 
          to="/" 
          className='px-10 py-4 text-xs sm:text-sm border-2 border-[#27C8F5] text-[#27C8F5] font-black uppercase tracking-[0.25em] rounded-2xl hover:bg-[#27C8F5] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(39,200,245,0.2)] hover:shadow-[0_0_50px_rgba(39,200,245,0.6)] text-decoration-none'
        >
          ➔ Return to Base
        </Link>
        
      </div>

    </div>
  )
}

export default NotFound;