import React from 'react';
import Header from './components/Header';
import PathCard from './components/PathCard'; 

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 pb-5">
      <Header />

      <div className="container mt-5">
        
        {/* React Dashboard Heading */}
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#61DAFB' }}>
          <i className="bi bi-box-seam me-2"></i> React Component Library
        </h2>
        <p className="text-secondary mb-5">
          Welcome to my React Lab. Here I build and showcase individual React components, state management workflows, and UI modules.
        </p>

        {/* Cards Row for React Mini-Projects */}
        <div className="row g-4 mb-5">
          
          <div className="col-md-6">
            {/* Future Project 1: (E.g., Counter or To-Do) */}
            <PathCard 
              title="State Management (Hooks)" 
              icon="🔄" 
              iconColor="#28a745" 
              desc="Exploring React useState and useEffect hooks to manage component data dynamically." 
              link="#" 
            />
          </div>

          <div className="col-md-6">
            {/* Future Project 2: (E.g., API Fetching) */}
            <PathCard 
              title="API Integration" 
              icon="🌐" 
              iconColor="#ffc107" 
              desc="Fetching and displaying real-time data from external APIs using React and Axios." 
              link="#" 
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;