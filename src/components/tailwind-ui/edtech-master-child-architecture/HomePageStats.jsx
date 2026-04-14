import React from 'react';

function HomePageStats() {
  const stats = [
    { label: "AVG Reviews", value: "4.5" },
    { label: "Enrollments", value: "30M" },
    { label: "Learners", value: "2M+" },
    { label: "Popular Courses", value: "1k+" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-4 border-b border-gray-100 bg-white">
      {stats.map((item, index) => (
        <div 
          key={index} 
          /* ⚡ Logic Updates:
             1. border-2 border-transparent: 
             2. hover:border-[#FFC353]:
             3. rounded-3xl: 
          */
          className="group text-center border-2 border-transparent p-6 rounded-[30px] cursor-pointer transition-all duration-300 hover:bg-slate-50 hover:border-[#FFC353] hover:shadow-lg"
        >
          {/* Number Pop-up with Color Change */}
          <h3 className="text-3xl md:text-4xl font-black text-black transform group-hover:scale-110 group-hover:text-[#FFC353] transition-all duration-300 inline-block">
            {item.value}
          </h3>
          
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2 group-hover:text-gray-700 transition-colors duration-300">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HomePageStats;