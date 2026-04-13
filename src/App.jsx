import React, { useState } from 'react';

// Bootstrap UI Imports (Old Portfolio)
import Header from './components/bootstrap-ui/Header';
import PathCard from './components/bootstrap-ui/PathCard';
import Pinterest from './components/bootstrap-ui/Pinterest';
import StatusModule from './components/bootstrap-ui/StatusModule';

// Tailwind UI Imports (Old Portfolio)
import TailwindShowcase from './components/tailwind-ui/TailwindShowcase';
import ProfileLab from './components/tailwind-ui/ProfileLab';
import ProductModule from './components/tailwind-ui/ProductModule';
import StateLab from './components/tailwind-ui/StateLab';
import UserEngine from './components/tailwind-ui/UserEngine';
import AxiosProducts from './components/tailwind-ui/AxiosProducts';

// HOMAS Landing Page Import (New Design Master File)
import HomasIndex from './components/tailwind-ui/HomasIndex';

function App() {
  // State Logic for Navigation
  // Default view is 'home' (Old Portfolio)
  const [currentView, setCurrentView] = useState('home');

  // Dummy Data for Portfolio
  const currentUser = {
    username: "Gunasekaran",
    useremail: "gunasekaran006@gmail.com",
    status: true,
    loginstatus: true
  };

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

  function handleRefresh() { alert("System Refresh Initiated!"); }
  function handleDeploy(assetName) { alert(`🚀 Deployment Started: ${assetName}`); }

  return (
    <div className="bg-dark text-light min-vh-100 pb-5" style={{ fontFamily: 'sans-serif' }}>
      
      {/* Header remains visible on all pages */}
      <Header />

      {/* Conditional Rendering Logic Start */}
      {currentView === 'home' ? (
        
        /* --- VIEW 1: HOME PAGE (Old Portfolio) --- */
        <div className="container mt-5">
          
          {/* Header Title & Button Container */}
          <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-4">
            <h2 className="h4 m-0" style={{ color: '#61DAFB' }}>
              <i className="bi bi-box-seam me-2"></i> Zero to Infinity: Multi-Framework Integration Lab
            </h2>
            
            {/* Button to switch to the new design */}
            <button 
              onClick={() => setCurrentView('homas')} 
              className="btn btn-warning fw-bold shadow-sm"
            >
              View Ed-Tech Landing Page ➔
            </button>
          </div>

          {/* Section 1: System Identity */}
          <div className="row mb-5">
            <div className="col-12">
              <StatusModule user={currentUser} onRefresh={handleRefresh} />
            </div>
          </div>

          {/* Section 2: Navigation Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-3">
              <PathCard title="1. Props Lab" icon="🆔" iconColor="#27C8F5" desc="Atomic Architecture: Reusable Atoms driven by professional tech profile Props." framework="TAILWIND CSS" link="#profile-lab" />
            </div>
            <div className="col-md-3">
              <PathCard title="2. Mapping Lab" icon="📊" iconColor="#F97316" desc="Dynamic Product Data Mapping: Advanced Array processing with Filter and Sort." framework="TAILWIND CSS" link="#product-lab" />
            </div>
            <div className="col-md-3">
              <PathCard title="3. Pinterest Grid" icon="📌" iconColor="#E60023" desc="Masonry Layout Showcase: Implementing complex grid systems for images." framework="BOOTSTRAP 5" link="#pinterest-demo" />
            </div>
            <div className="col-md-3">
              <PathCard title="4. Tailwind UI" icon="⚡" iconColor="#38BDF8" desc="Digital UI Assets: Exploring Utility-first development with Deploy modules." framework="TAILWIND CSS" link="#tailwind-demo" />
            </div>
            <div className="col-md-3">
              <PathCard title="5. Hooks Lab" icon="🪝" iconColor="#A855F7" desc="State Management: Implementing useState for login, counters, and payments." framework="TAILWIND CSS" link="#hooks-lab" />
            </div>
            <div className="col-md-3">
              <PathCard title="6. Axios Engine" icon="📡" iconColor="#A855F7" desc="Advanced Data Fetching: Using Axios to retrieve and render product JSON objects." framework="TAILWIND CSS" link="#axios-lab" />
            </div>
          </div>

          {/* --- LIVE MODULES --- */}
          <div id="profile-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <ProfileLab userData={techUserData} />
          </div>

          <div id="product-lab" className="mt-5 pt-5 border-t border-slate-800">
            <ProductModule />
          </div>

          <div id="pinterest-demo" className="mt-5 pt-5 border-t border-secondary">
            <div className="p-4 rounded bg-black shadow-lg border border-secondary">
              <Pinterest />
            </div>
          </div>

          <div id="tailwind-demo" className="mt-5 pt-5 border-t border-slate-800">
            <TailwindShowcase onDeploy={handleDeploy} />
          </div>

          <div id="hooks-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <StateLab />
            <UserEngine />
          </div>

          <div id="axios-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <AxiosProducts />
          </div>

        </div>

      ) : (

        /* --- VIEW 2: HOMAS LANDING PAGE (New Design) --- */
        <div className="container mt-4">
          
          {/* Back Button to return to Home */}
          <button 
            onClick={() => setCurrentView('home')} 
            className="btn btn-outline-light mb-4 d-flex align-items-center gap-2 px-4 py-2"
          >
            ⬅ Back to Portfolio Dashboard
          </button>

          {/* Complete New Design loads here */}
          <HomasIndex />
          
        </div>

      )}
      {/* Conditional Rendering Logic End */}

    </div>
  );
}

export default App;