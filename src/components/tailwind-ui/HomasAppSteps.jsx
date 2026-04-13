import React from 'react';

function HomasAppSteps() {
  return (
    <section className="py-20 px-4">
      
      {/* Steps & Mobile Image */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Its easy to start <br/><span className="bg-[#FFC353]/30 px-3 rounded-xl italic inline-block mt-2">Learning</span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm">Our sign in process lets you start your learning journey without much hassle.</p>
          <ul className="space-y-5 text-sm font-bold text-gray-700">
            {['Create Account', 'Purchase lessons', 'Start learning'].map((step, i) => (
              <li key={i} className="flex items-center gap-3"><span className="text-[#FFC353] bg-yellow-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">✔</span> {step}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg" alt="App UI" className="max-w-[350px] mix-blend-multiply"/>
        </div>
      </div>

      {/* Yellow CTA Banner */}
      <div className="bg-[#FFC353] rounded-[35px] p-10 flex flex-col md:flex-row items-center justify-between shadow-xl mb-20">
        <div className="flex items-center gap-6">
           <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center text-3xl">👨‍🏫</div>
           <div>
             <h3 className="text-2xl font-bold text-black mb-1">Get Ready to Started</h3>
             <p className="text-black/70 text-sm">Join a good course and forgive anybody.</p>
           </div>
        </div>
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest mt-6 md:mt-0">Order Now ➔</button>
      </div>

      {/* App Store Download Section */}
      <div className="text-center pb-10 border-b border-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
          Try Learning Free <br/> on <span className="bg-[#FFC353]/30 px-3 rounded-xl italic inline-block mt-2 border border-[#FFC353]">Mobile App</span>
        </h3>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-slate-800">
             <span>🍏</span> App Store
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-slate-800">
             <span>▶️</span> Google Play
          </button>
        </div>
      </div>

    </section>
  );
}

export default HomasAppSteps;