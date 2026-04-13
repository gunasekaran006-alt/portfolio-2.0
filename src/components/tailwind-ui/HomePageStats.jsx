import React from 'react';

function HomePageStats() {
  const stats = [
    { label: "AVG Reviews", value: "4.5" },
    { label: "Enrollments", value: "30M" },
    { label: "Learners", value: "2M+" },
    { label: "Popular Courses", value: "1k+" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 border-b border-gray-100">
      {stats.map((item, index) => (
        <div key={index} className="text-center border-r last:border-0 border-gray-200">
          <h3 className="text-3xl md:text-4xl font-black text-black">{item.value}</h3>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePageStats;