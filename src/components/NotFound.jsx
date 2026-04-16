import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    // ⚡ Added p-5 to ensure text never touches the screen edges on mobile
    <div className='flex flex-col items-center justify-center min-h-[70vh] text-center p-5'>
      
      {/* ⚡ Responsive giant text for 404 */}
      <h1 className='text-[80px] sm:text-[100px] md:text-[120px] font-black text-slate-800 leading-none'>
        404
      </h1>
      
      <h2 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-widest'>
        PAGE <span className='text-red-500'>NOT FOUND</span>
      </h2>
      
      <p className='text-slate-500 text-sm sm:text-base mb-8 max-w-xs sm:max-w-md mx-auto'>
        The neural pathway you are trying to access does not exist or has been moved to a different sector.
      </p>
      
      <Link to="/" className='px-5 py-3 sm:px-6 sm:py-3 text-[11px] sm:text-sm bg-[#27C8F5] text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all text-decoration-none'>
        ➔ Return to Base
      </Link>
      
    </div>
  )
}

export default NotFound;