import React from 'react';

function HomasFeatures() {
  const features = [
    { icon: "📜", title: "Get Certificate", desc: "Add value to your certificates and increase your chances of getting hired." },
    { icon: "👨‍🏫", title: "Amazing Instructor", desc: "Our instructors bring experience, knowledge and fun to the table." },
    { icon: "🎧", title: "Life Time Support", desc: "You will have life time access of the courses & resources. Also contacting instructors any time!" },
    { icon: "🎬", title: "Video Lesson", desc: "Recorded version of lectures from professional instructors to boost your growth." }
  ];

  return (
    <section className="py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Black Box */}
        <div className="lg:col-span-1 bg-[#1c1c1c] text-white p-10 rounded-[35px] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-[#FFC353] italic">Features</span> Special For you</h2>
          <button className="bg-[#FFC353] text-black text-xs font-bold px-6 py-3 rounded-full mt-4 w-max">See All Features ➔</button>
        </div>
        
        {/* Right 4 White Boxes */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[35px] shadow-sm hover:shadow-md transition-all">
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h4 className="font-bold text-black">{item.title}</h4>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomasFeatures;