import React from 'react'
import "./styles/pinterest.css";

function Pinterest() {
  return (
    <div className='p-8 bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl transition-all'>
      
      {/* Integrated Header: Standard Cyan Title & Light Grey Tag */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h4 className="!text-[#27C8F5] text-xs font-black uppercase tracking-widest flex items-center gap-2">
           <span className="text-lg"></span> Pinterest Masonry Showcase
        </h4>        
      </div>

      {/* Masonry Grid Section */}
      <div className="masonry-grid">
        {["item-tall", "item-medium", "item-small", "item-tall", "item-medium", "item-small"].map((size, index) => {
            const images = [
                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
                "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
            ];
            return (
                <div key={index} className={`item ${size} border-2 border-slate-800 hover:border-[#27C8F5] transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer`}>
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={images[index]} alt="Lab Asset" />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Pinterest;