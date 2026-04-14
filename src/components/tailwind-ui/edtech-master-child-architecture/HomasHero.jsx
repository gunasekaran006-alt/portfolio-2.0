import React from 'react';

function HomasHero() {
  return (
    <section className="bg-[#FFC353] rounded-[40px] p-8 md:p-16 mb-12 mx-4 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content Area */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
            Improve your <br />
            <span className="text-black bg-white italic inline-block transform -rotate-2 px-6 py-1 rounded-2xl shadow-sm mt-3">
              Skills
            </span> Faster
          </h1>
          <p className="text-black/80 text-lg mb-8 max-w-md mx-auto lg:mx-0 font-medium">
            Speed up the skill acquisition process by finding individual courses that match your career goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
              Enroll Now ➔
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-[#FFC353] bg-white object-cover" src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                ))}
              </div>
              <span className="text-xs font-bold text-black uppercase tracking-wider">12K+ Learners</span>
            </div>
          </div>
        </div>

        {/* Right Content Area - THE 3D EFFECT LOGIC */}
        <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
          
          {/* 🔵 Layer 1: Blurred Background Shadow (Z-0) */}
          <div className="absolute top-0 right-0 bg-white/40 w-40 h-40 rounded-3xl -rotate-12 blur-2xl z-0"></div>

          {/* 🟡 Layer 2: Main Image Box (Z-10) */}
          <div className="relative z-10 bg-white p-6 rounded-[35px] shadow-2xl max-w-[450px] w-full border border-white/50">
            <img 
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
              alt="Hero Illustration" 
              className="rounded-2xl w-full h-auto" 
            />

            {/* 🔴 Layer 3: Floating Discount Element (Z-20 + Bounce Animation) */}
            <div className="absolute -top-6 -left-6 bg-white p-3 rounded-2xl shadow-xl z-20 animate-bounce border border-gray-100">
              <div className="flex items-center justify-center bg-green-100 text-green-600 rounded-full w-12 h-12">
                <span className="text-xl font-bold">%</span>
              </div>
            </div>

            {/* 🔴 Layer 3: Floating Bell Element (Z-20 + Pulse Animation) */}
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-2xl shadow-xl z-20 border border-gray-100">
              <div className="flex items-center justify-center bg-[#FFC353] text-black rounded-full w-14 h-14 animate-pulse">
                <span className="text-2xl">🔔</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HomasHero;