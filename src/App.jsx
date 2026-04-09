import React from 'react';
import Header from './components/bootstrap-ui/Header';
import PathCard from './components/bootstrap-ui/PathCard';
import Pinterest from './components/bootstrap-ui/Pinterest';
import StatusModule from './components/bootstrap-ui/StatusModule';
import TailwindShowcase from './components/tailwind-ui/TailwindShowcase';

function App() {
  // 1. User Data Object (Day 41 Concept)
  const currentUser = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: true, 
    loginstatus: true 
  };

  // 2. Refresh Logic for StatusModule (Day 41 Concept)
  function handleRefresh() {
    alert("System Refresh Initiated for: " + currentUser.username);
  }

  // 3. Deploy Logic for TailwindShowcase (Standard Click Logic)
  // This was missing in the previous version
  function handleDeploy(assetName) {
    alert(`🚀 Deployment Started: ${assetName}\nStatus: Successfully pushed to production!`);
    console.log(`Deployment Log: ${assetName} initiated by ${currentUser.username}`);
  }

  return (
    <div className="bg-dark text-light min-vh-100 pb-5" style={{ fontFamily: 'sans-serif' }}>
      <Header />

      <div className="container mt-5">
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#61DAFB' }}>
          <i className="bi bi-box-seam me-2"></i> Zero to Infinity: React Lab
        </h2>

        {/* System Identity Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="h6 text-secondary text-uppercase mb-3">System Identity (Day 41)</h3>
            <StatusModule
              user={currentUser}
              onRefresh={handleRefresh}
            />
          </div>
        </div>

        {/* Navigation Grid Section - 3 Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <PathCard
              title="Tech & Innovation Grid"
              icon="📌"
              iconColor="#E60023"
              desc="A responsive Masonry Grid layout built using React and pure CSS Grid."
              link="#pinterest-demo"
            />
          </div>

          <div className="col-md-4">
            <PathCard
              title="Identity Logic"
              icon="🆔"
              iconColor="#27C8F5"
              desc="Deep dive into Object Props & Conditional Rendering from Day 41."
              link="#"
            />
          </div>

          <div className="col-md-4">
            <PathCard
              title="Tailwind UI Lab"
              icon="⚡"
              iconColor="#38BDF8"
              desc="Rapid UI development using Tailwind CSS Utility Classes and Responsive Grid."
              link="#tailwind-demo"
            />
          </div>
        </div>
        
        {/* Live Module 1: Bootstrap & CSS Grid Showcase */}
        <div id="pinterest-demo" className="mt-5 p-4 border border-secondary rounded bg-black shadow-lg">
          <h3 className="h5 text-warning mb-4">🚀 Live Module: Pinterest Showcase</h3>
          <Pinterest />
        </div>

        {/* Live Module 2: Tailwind CSS Showcase */}
        <div id="tailwind-demo">
          {/* 🎯 Passing handleDeploy as a prop here */}
          <TailwindShowcase onDeploy={handleDeploy} />
        </div>

      </div>
    </div>
  );
}

export default App;