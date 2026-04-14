import React from 'react';



// Bento Grid Layout System:
// In the HomasFeatures section, we arranged one large black box on the left and four smaller white boxes on the right—didn't we?
// The logic we implemented using `col-span-1` and `col-span-2` is known as the "Bento Grid." This is a new system currently trending in UI/UX design.



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
        <div className="lg:col-span-1 bg-[#1c1c1c] text-white p-10 rounded-[35px] flex flex-col justify-center transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FFC353] italic">Features</span> Special For you
          </h2>
          <button className="bg-[#FFC353] text-black text-xs font-bold px-6 py-3 rounded-full mt-4 w-max hover:bg-white hover:scale-105 transition-all duration-300 active:scale-95">
            See All Features ➔
          </button>
        </div>
        
        {/* Right 4 White Boxes - UPDATED HOVER LOGIC */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              // ⚡ 1. Card Border Animation (Added border-2 and hover:border-[#FFC353])
              className="group bg-white border-2 border-gray-100 p-8 rounded-[35px] shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#FFC353] transition-all duration-300 cursor-pointer"
            >
              {/* ⚡ 2. Icon Animation (Scales up and slightly rotates) */}
              <span className="text-4xl block mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 origin-bottom-left">
                {item.icon}
              </span>
              
              {/* Title - Removed the yellow text hover, keeping it solid black for clarity */}
              <h4 className="font-bold text-black">
                {item.title}
              </h4>
              
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HomasFeatures;