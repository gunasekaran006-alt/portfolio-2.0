import React from 'react';

function HomasHero() {
  return (
    <section className="bg-[#FFC353] rounded-[40px] p-8 md:p-16 mb-12 mx-4 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-black text-black leading-tight mb-6">
            Improve your <br />
            <span className="text-black bg-white italic inline-block transform -rotate-2 px-6 py-1 rounded-2xl shadow-sm mt-3">
              Skills
            </span> Faster
          </h1>
          <p className="text-black/80 text-lg mb-8 max-w-md font-medium">
            Speed up the skill acquisition process by finding individual courses that match your career goals.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
              Enroll Now ➔
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="relative z-10 bg-white p-4 rounded-[35px] shadow-2xl max-w-[450px]">
            <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" alt="Hero Illustration" className="rounded-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomasHero;