import React from 'react';

function TailwindShowcase({ onDeploy }) {
    const assets = [
        { id: 1, title: "Neural Network UI", price: "$499", img: "https://i.pinimg.com/1200x/75/64/a4/7564a46db35bcb55cfabe5953b98f2eb.jpg" },
        { id: 2, title: "Cyberpunk Assets", price: "$150", img: "https://i.pinimg.com/736x/4b/12/b4/4b12b4454feccf75c0cee96d5425ec2a.jpg" },
        { id: 3, title: "Data Visualization", price: "$299", img: "https://i.pinimg.com/1200x/c7/a2/b4/c7a2b4919e28f55c133faf5260aacc82.jpg" },
        { id: 4, title: "Cloud Infrastructure", price: "$850", img: "https://i.pinimg.com/1200x/49/dc/61/49dc61147e167cac642dd852181dc152.jpg" }
    ];

    return (
        <div className="mt-12 p-5 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl font-sans">
            
            {/* Header Row - Updated with flex-col for 320px mobile view and gap-4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    <span style={{ color: "#27C8F5" }}>Tailwind</span> Digital Assets
                </h2>
                
                {/* Badge - Updated to border-2, Solid Cyan, and Glow Effect */}
                <span className="border-2 bg-[#27C8F5]/10 border-[#27C8F5] text-[#27C8F5] shadow-[0_0_15px_rgba(39,200,245,0.15)] text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full flex items-center gap-2 flex-wrap sm:whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27C8F5] animate-pulse"></span>
                    Responsive Grid
                </span>
            </div>

            {/* Grid layout stays perfectly responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {assets.map((item) => (
                    <div key={item.id} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-[#27C8F5]/50 transition-all duration-300 flex flex-col">
                        
                        <div className="relative overflow-hidden">
                            <img src={item.img} className="w-full h-auto max-h-[250px] object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                            
                            {/* Price Tag */}
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-slate-700">
                                {item.price}
                            </div>
                        </div>

                        {/* Content Area - flex-1 pushes button to bottom */}
                        <div className="p-5 flex flex-col flex-1">
                            {/* ⚡ FIXED: Removed 'truncate' class here so dots (...) will not appear */}
                            <h3 className="text-slate-200 font-bold text-lg mb-4">{item.title}</h3>

                            {/* Button - Updated to Master Theme with border-2 and solid color */}
                            <button
                                onClick={() => onDeploy(item.title)}
                                className="w-full mt-auto bg-[#27C8F5]/10 border-2 border-[#27C8F5] text-[#27C8F5] font-black py-3 !rounded-full hover:bg-[#27C8F5] hover:text-black transition-all outline-none uppercase tracking-widest text-[11px] shadow-[0_0_15px_rgba(39,200,245,0.1)]"
                            >
                                Deploy Asset ➔
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TailwindShowcase;