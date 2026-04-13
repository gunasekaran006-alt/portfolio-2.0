import React from 'react';

function HomasCourses() {
  const courses = [1, 2, 3].map(id => ({
    id, title: "Learn English: Beginning Grammar", rating: "4.8", reviews: "1k+", image: "https://img.freepik.com/free-vector/online-learning-concept_23-2148533386.jpg"
  }));

  return (
    <section className="bg-[#1c1c1c] py-20 mt-12 rounded-[40px] px-8 mx-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
        Popular <span className="text-[#FFC353] italic border-b-2 border-[#FFC353]">Courses</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-[35px] p-6">
            <div className="bg-slate-100 rounded-3xl h-48 mb-6 overflow-hidden flex items-center justify-center">
              <img src={course.image} alt="Course" className="h-full object-cover mix-blend-multiply" />
            </div>
            <p className="text-[10px] text-gray-400 font-bold mb-3 uppercase">⭐ {course.rating} ({course.reviews} Reviews)</p>
            <h3 className="text-lg font-bold text-black mb-6 line-clamp-2">{course.title}</h3>
            <button className="border-2 border-gray-200 text-black text-xs font-bold px-6 py-2 rounded-full w-max hover:bg-[#FFC353] hover:border-[#FFC353] transition-all">View Course</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomasCourses;