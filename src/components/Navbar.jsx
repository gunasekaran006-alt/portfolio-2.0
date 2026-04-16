import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); 

  // Helper function to dynamically add 'Active' class
  const getLinkStyle = (path) => {
    // If current URL matches the path, give it the Cyan color (Active State)
    if (location.pathname === path) {
      return 'text-[#27C8F5] text-[10px] sm:text-xs font-black uppercase tracking-widest text-decoration-none';
    }
    // If not active, keep it Grey
    return 'text-slate-400 hover:text-[#27C8F5] text-[10px] sm:text-xs font-bold uppercase tracking-widest text-decoration-none transition-colors';
  };

  return (
    <nav className='bg-[#0a0a0a] border-b border-slate-800 p-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0'>
        
        {/* Logo Section */}
        <Link to="/" className='font-black text-xl text-white tracking-widest text-decoration-none'>
          GUNA<span className='text-[#27C8F5]'>SEKARAN</span>
        </Link>

        {/* Navigation Links - BOTH links stay, but one is highlighted! */}
        <ul className='flex flex-wrap justify-center gap-4 sm:gap-6 m-0 p-0 list-none'>
          
          <li>
            <Link to="/" className={getLinkStyle('/')}>
              Dashboard
            </Link>
          </li>
          
          <li>
            <Link to="/edtech" className={getLinkStyle('/edtech')}>
              Ed-Tech Platform
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar;