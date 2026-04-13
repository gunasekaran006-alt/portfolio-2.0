import React from 'react';

function HomasFooter() {
  return (
    <footer className="bg-[#1c1c1c] text-white rounded-b-[40px] p-12 mx-4 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-700 pb-10">
        <div className="col-span-1">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="text-[#FFC353] text-2xl">⌘</span> WOMAC</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Speed up the skill acquisition process by finding unlimited courses that matches your niche.</p>
        </div>
        {[
          { title: "Company", links: ["About Us", "Careers", "Press Kit"] },
          { title: "Resources", links: ["Blog", "Help Center", "UX Research Guide"] },
          { title: "Product", links: ["Pricing", "Enterprise", "Integrations"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="font-bold mb-4 text-sm text-gray-200">{col.title}</h4>
            <ul className="text-gray-400 text-xs space-y-3 font-medium">
              {col.links.map((link, j) => <li key={j} className="cursor-pointer hover:text-[#FFC353]">{link}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-medium">
        <p>© Womac 2026 | All rights reserved.</p>
        <p className="mt-2 md:mt-0 cursor-pointer">Terms & Privacy Policy</p>
      </div>
    </footer>
  );
}

export default HomasFooter;