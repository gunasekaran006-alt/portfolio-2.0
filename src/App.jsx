import React from 'react';
import Header from './components/Header';
import PathCard from './components/PathCard';
import Pinterest from './components/Pinterest';
import StatusModule from './components/StatusModule';

function App() {
  // 1. Your User Data (Day 41 Concept)
  const currentUser = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: true, // Try False
    loginstatus: true // Try False
  };

  // 2. Your Logic Function (Day 41 Concept)
  // This is the function we pass to the button
  function handleRefresh() {
    alert("System Refresh Initiated for: " + currentUser.username);
  }

  return (
    <div className="bg-dark text-light min-vh-100 pb-5" style={{ fontFamily: 'sans-serif' }}>
      <Header />

      <div className="container mt-5">
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#61DAFB' }}>
          <i className="bi bi-box-seam me-2"></i> Zero to Infinity: React Lab
        </h2>

        {/* 3. Rendering StatusModule with both Data and Logic Props */}
        <div className="row mb-5">
            <div className="col-12">
                <h3 className="h6 text-secondary text-uppercase mb-3">System Identity (Day 41)</h3>
                
                {/* Here we pass:
                   1. 'user' -> which is the currentUser object
                   2. 'onRefresh' -> which is the handleRefresh function
                */}
                <StatusModule 
                  user={currentUser} 
                  onRefresh={handleRefresh} 
                />
            </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <PathCard 
              title="Tech & Innovation Grid" 
              icon="📌" 
              iconColor="#E60023" 
              desc="Responsive Masonry Grid using Props & CSS Grid." 
              link="#pinterest-demo" 
            />
          </div>
          <div className="col-md-6">
            <PathCard 
              title="Identity Logic" 
              icon="🆔" 
              iconColor="#27C8F5" 
              desc="Deep dive into Object Props & Conditional Rendering." 
              link="#" 
            />
          </div>
        </div>

        <div id="pinterest-demo" className="mt-5 p-4 border border-secondary rounded bg-black shadow-lg">
            <h3 className="h5 text-warning mb-4">🚀 Live Module: Project Showcase</h3>
            <Pinterest />
        </div>
      </div>
    </div>
  );
}

export default App;