import React from 'react';

function HomasFooter() {
  return (
    <footer className="bg-[#1c1c1c] text-white rounded-b-[40px] p-12 mx-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-700 pb-10">
        
        {/* Brand Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 cursor-pointer hover:text-[#FFC353] transition-colors duration-300 w-max">
            <span className="text-[#FFC353] text-2xl">⌘</span> WOMAC
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed hover:text-gray-300 transition-colors cursor-pointer">
            Speed up the skill acquisition process by finding unlimited courses that matches your niche.
          </p>
        </div>

        {/* Footer Links with Slide Animation */}
        {[
          { title: "Company", links: ["About Us", "Careers", "Press Kit"] },
          { title: "Resources", links: ["Blog", "Help Center", "UX Research Guide"] },
          { title: "Product", links: ["Pricing", "Enterprise", "Integrations"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-bold mb-4 text-sm text-gray-200">{col.title}</h4>
            <ul className="text-gray-400 text-xs space-y-3 font-medium">
              {col.links.map((link, j) => (
                // ⚡ Added translate-x-2: text slides right on hover
                <li key={j} className="cursor-pointer hover:text-[#FFC353] hover:translate-x-2 transition-all duration-300 w-max">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Bottom Copyright Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium">
        <p className="hover:text-gray-300 transition-colors cursor-pointer">© Womac 2026 | All rights reserved.</p>
        <p className="mt-2 md:mt-0 cursor-pointer hover:text-[#FFC353] transition-colors duration-300">Terms & Privacy Policy</p>
      </div>
    </footer>
  );
}

export default HomasFooter;