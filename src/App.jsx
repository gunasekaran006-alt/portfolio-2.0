import React from 'react';
// Bootstrap UI Imports
import Header from './components/bootstrap-ui/Header';
import PathCard from './components/bootstrap-ui/PathCard';
import Pinterest from './components/bootstrap-ui/Pinterest';
import StatusModule from './components/bootstrap-ui/StatusModule';
// Tailwind UI Imports
import TailwindShowcase from './components/tailwind-ui/TailwindShowcase';
import ProfileLab from './components/tailwind-ui/ProfileLab'; // New Day 43 Component

function App() {
  // 1. User Identity Data (Day 41 Concept)
  const currentUser = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: true, 
    loginstatus: true 
  };

  // 2. Day 43 Props Data: Professional Tech Profile
  const techUserData = {
    name: "Gunasekaran S",
    role: "AI-Enhanced MERN Architect",
    skills: "MERN Stack + Gen AI",
    location: "Coimbatore, TN",
    experience: "12+ Years",
    bio: "Bridging 12 years of business expertise with modern AI-driven full stack systems.",
    image: "https://i.pinimg.com/736x/c5/df/67/c5df670a013d2643d0d16febd2624d9a.jpg",
    isOnline: true
  };

  // --- Logic Functions ---
  function handleRefresh() {
    alert("System Refresh Initiated for: " + currentUser.username);
  }

  function handleDeploy(assetName) {
    alert(`🚀 Deployment Started: ${assetName}\nStatus: Successfully pushed to production!`);
    console.log(`Deployment Log: ${assetName} initiated by ${currentUser.username}`);
  }

  return (
    <div className="bg-dark text-light min-vh-100 pb-5" style={{ fontFamily: 'sans-serif' }}>
      {/* Bootstrap Component */}
      <Header />

      <div className="container mt-5">
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#61DAFB' }}>
          <i className="bi bi-box-seam me-2"></i> Zero to Infinity: Multi-Framework Integration Lab
        </h2>

        {/* Section 1: System Identity (Day 41 - Bootstrap) */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="h6 text-secondary text-uppercase mb-3">Core System Engine</h3>
            <StatusModule
              user={currentUser}
              onRefresh={handleRefresh}
            />
          </div>
        </div>

        {/* Section 2: Navigation Grid (Bootstrap) */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <PathCard
              title="Tech & Innovation Grid"
              icon="📌"
              iconColor="#E60023"
              desc="Demonstrating Pinterest-style Masonry layout using Bootstrap and Custom CSS."
              link="#pinterest-demo"
            />
          </div>

          <div className="col-md-4">
            <PathCard
              title="Props Lab"
              icon="🆔"
              iconColor="#27C8F5"
              desc="Showcasing Atomic Component Architecture and Props-driven UI using Tailwind logic."
              link="#profile-lab"
            />
          </div>

          <div className="col-md-4">
            <PathCard
              title="Tailwind UI Assets"
              icon="⚡"
              iconColor="#38BDF8"
              desc="Exploring Utility-first rapid UI development and Framework coexistence."
              link="#tailwind-demo"
            />
          </div>
        </div>

        {/* Section 3: Day 43 Live Module (Tailwind Layer) */}
        <div id="profile-lab" className="mt-5 mb-5 flex flex-col items-center">
            <h3 className="text-xl font-bold text-info mb-4 text-center">🚀Atomic Component Lab</h3>
            {/* Logic: Passing techUserData to ProfileLab via Props */}
            <ProfileLab userData={techUserData} />
        </div>
        
        {/* Section 4: Bootstrap Pinterest Showcase */}
        <div id="pinterest-demo" className="mt-5 p-4 border border-secondary rounded bg-black shadow-lg">
          <h3 className="h5 text-warning mb-4">🚀 Live Module: Pinterest Showcase (CSS Grid)</h3>
          <Pinterest />
        </div>

        {/* Section 5: Tailwind Showcase */}
        <div id="tailwind-demo" className="mt-5">
          <TailwindShowcase onDeploy={handleDeploy} />
        </div>

      </div>
    </div>
  );
}

export default App;