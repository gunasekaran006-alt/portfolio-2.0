import React from 'react';

function HomasCourses() {
  const courses = [
    { id: 1, title: "Learn English: Beginning Grammar", rating: "4.8", reviews: "1k+", image: "https://img.freepik.com/free-vector/online-learning-concept_23-2148533386.jpg" },
    { id: 2, title: "Mastering MERN Stack Web Dev", rating: "4.9", reviews: "2.5k+", image: "https://img.freepik.com/free-vector/programmer-working-concept-illustration_114360-305.jpg" },
    { id: 3, title: "AI & Generative AI for Beginners", rating: "4.7", reviews: "800+", image: "https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7001.jpg" }
  ];

  return (
    <section className="bg-[#1c1c1c] py-20 mt-12 rounded-[40px] px-8 mx-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        Popular <span className="text-[#FFC353] italic border-b-2 border-[#FFC353]">Courses</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => (
          <div 
            key={course.id} 
            // ⚡ Added border-2 border-transparent and hover:border-[#FFC353]
            className="group bg-white rounded-[35px] p-6 border-2 border-transparent hover:border-[#FFC353] hover:-translate-y-3 transition-all duration-300 cursor-pointer shadow-lg"
          >
            <div className="bg-slate-100 rounded-3xl h-48 mb-6 overflow-hidden flex items-center justify-center">
              <img src={course.image} alt={course.title} className="h-full object-cover mix-blend-multiply transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase tracking-wider">⭐ {course.rating} ({course.reviews} Reviews)</p>
            <h3 className="text-lg font-bold text-black mb-6 line-clamp-2 min-h-[56px] group-hover:text-[#FFC353] transition-colors duration-300">{course.title}</h3>
            <button className="border-2 border-gray-200 text-black text-xs font-bold px-6 py-2 rounded-full w-max group-hover:bg-[#FFC353] group-hover:border-[#FFC353] transition-all duration-300">View Course</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomasCourses;