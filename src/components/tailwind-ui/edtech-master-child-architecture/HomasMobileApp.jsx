import React from 'react';

function HomasMobileApp() {
  return (
    <section className="py-20 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Its easy to start <br/><span className="bg-[#FFC353]/30 px-3 rounded-xl italic inline-block mt-2">Learning</span>
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm">Our sign in process lets you start your learning journey without much hassle.</p>
          
          <ul className="space-y-4">
            {['Create Account', 'Purchase lessons', 'Start learning'].map((step, i) => (
              // ⚡ Added border and hover effect to each list item
              <li 
                key={i} 
                className="flex items-center gap-3 p-4 rounded-2xl border-2 border-transparent hover:border-[#FFC353] hover:bg-slate-50 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-[#FFC353] bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">✔</span>
                <span className="text-sm font-bold text-gray-700 group-hover:text-black">{step}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg" alt="App UI" className="max-w-[350px] mix-blend-multiply hover:-translate-y-4 transition-transform duration-500"/>
        </div>
      </div>

      {/* CTA Banner with updated hover scale */}
      <div className="bg-[#FFC353] rounded-[35px] p-10 flex flex-col md:flex-row items-center justify-between shadow-xl mb-20 border-4 border-transparent hover:border-black/5 transition-all">
        <div className="flex items-center gap-6">
           <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center text-3xl">👨‍🏫</div>
           <div>
             <h3 className="text-2xl font-bold text-black mb-1">Get Ready to Started</h3>
             <p className="text-black/70 text-sm">Join a good course and forgive anybody.</p>
           </div>
        </div>
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest mt-6 md:mt-0 hover:scale-105 transition-all">Order Now ➔</button>
      </div>
    </section>
  );
}

export default HomasMobileApp;