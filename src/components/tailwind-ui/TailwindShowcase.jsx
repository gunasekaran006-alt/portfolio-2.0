import React from 'react';

function TailwindShowcase({ onDeploy }) {
    const assets = [
        { id: 1, title: "Neural Network UI", price: "$499", img: "https://i.pinimg.com/1200x/75/64/a4/7564a46db35bcb55cfabe5953b98f2eb.jpg" },
        { id: 2, title: "Cyberpunk Assets", price: "$150", img: "https://i.pinimg.com/736x/4b/12/b4/4b12b4454feccf75c0cee96d5425ec2a.jpg" },
        { id: 3, title: "Data Visualization", price: "$299", img: "https://i.pinimg.com/1200x/c7/a2/b4/c7a2b4919e28f55c133faf5260aacc82.jpg" },
        { id: 4, title: "Cloud Infrastructure", price: "$850", img: "https://i.pinimg.com/1200x/49/dc/61/49dc61147e167cac642dd852181dc152.jpg" }
    ];

    // 🎯 Master Hub Standard Styles (Inline to bypass all conflicts)
    const masterButtonStyle = {
        backgroundColor: "#27C8F5",
        color: "#000",
        fontWeight: "bold",
        border: "none",
        padding: "12px",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "all 0.2s ease"
    };

    return (
        <div className="mt-12 p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl font-sans">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                    <span style={{ color: "#27C8F5" }}>Tailwind</span> Digital Assets
                </h2>
                <span className="px-3 py-1 bg-cyan-500/10 text-[#27C8F5] text-xs font-bold rounded-full border border-cyan-500/20 uppercase tracking-widest">
                    Responsive Grid
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {assets.map((item) => (
                    <div key={item.id} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                        <div className="relative overflow-hidden">
                            {/* <img src={item.img} className="w-full h-72 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} /> */}
                            <img src={item.img} className="w-full h-auto max-h-[300px] object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-white">
                                {item.price}
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="text-slate-200 font-bold text-lg mb-4">{item.title}</h3>

                            {/* 🚀 Using 'style' prop to force the master hub color */}
                            <button
                                onClick={() => onDeploy(item.title)}
                                className="btn-master-hub mt-4"
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