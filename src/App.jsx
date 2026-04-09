import React from 'react';
import Header from './components/Header';
import PathCard from './components/PathCard';
import Pinterest from './components/Pinterest';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 pb-5" style={{ fontFamily: 'sans-serif' }}>
      
      {/* 1. Custom Enterprise Header */}
      <Header />

      <div className="container mt-5">
        
        {/* 2. Zero to Infinity Section Heading */}
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#61DAFB' }}>
          <i className="bi bi-box-seam me-2"></i> Zero to Infinity: React Lab
        </h2>
        <p className="text-secondary mb-5">
          Welcome to my React Lab. Here I build and showcase individual React components, state management workflows, and UI modules.
        </p>

        {/* 3. PathCards Section for Mini-Projects */}
        <div className="row g-4 mb-5">
          
          <div className="col-md-6">
            {/* Active Project: Tech & Innovation Grid */}
            <PathCard 
              title="Tech & Innovation Grid" 
              icon="📌" 
              iconColor="#E60023" 
              desc="A responsive Masonry Grid layout built using React functional components and pure CSS Grid." 
              link="#pinterest-demo" 
            />
          </div>

          <div className="col-md-6">
            {/* Future Project: State Management */}
            <PathCard 
              title="State Management (Hooks)" 
              icon="🔄" 
              iconColor="#28a745" 
              desc="Exploring React useState and useEffect hooks (Coming Soon)." 
              link="#" 
            />
          </div>

        </div>

        {/* 4. Live Module Display Area */}
        <div id="pinterest-demo" className="mt-5 p-4 border border-secondary rounded bg-black shadow-lg">
            <h3 className="h5 text-warning mb-4">🚀 Live Module: Tech Innovation Grid</h3>
            
            {/* Rendered Pinterest Component */}
            <Pinterest />
            
        </div>

      </div>
    </div>
  );
}

export default App;