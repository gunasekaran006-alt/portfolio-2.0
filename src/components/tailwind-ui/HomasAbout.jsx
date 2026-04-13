import React from 'react';

function HomasAbout() {
  return (
    <section className="py-20 px-4 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 flex justify-center">
        <img src="https://img.freepik.com/free-vector/distance-learning-concept_52683-51829.jpg" alt="Smart Education" className="w-full max-w-lg mix-blend-multiply" />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
          We Provide <br/>
          <span className="bg-[#FFC353]/30 px-3 rounded-xl italic inline-block mt-2">Smart</span> Online Education
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md font-medium">
          Our courses come with assigned projects, direct interactions with mentors, relevant resources, and tools that help you dive into in-depth learning from anywhere.
        </p>
      </div>
    </section>
  );
}

export default HomasAbout;