import React, { useState } from 'react';

// Bootstrap UI Imports
import Header from './components/bootstrap-ui/Header';
import PathCard from './components/bootstrap-ui/PathCard';
import Pinterest from './components/bootstrap-ui/Pinterest';
import StatusModule from './components/bootstrap-ui/StatusModule';

// Tailwind UI Imports
import TailwindShowcase from './components/tailwind-ui/TailwindShowcase';
import ProfileLab from './components/tailwind-ui/ProfileLab';
import ProductModule from './components/tailwind-ui/ProductModule';
import StateLab from './components/tailwind-ui/StateLab';
import UserEngine from './components/tailwind-ui/UserEngine';
import AxiosProducts from './components/tailwind-ui/AxiosProducts';
import HomasIndex from './components/tailwind-ui/HomasIndex';

function App() {
  // ⚡ State Logic (Page Navigation)
  const [currentView, setCurrentView] = useState('home');

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
      <Header />

      {/* ⚡ Conditional Rendering Logic start */}
      {currentView === 'home' ? (
        
        <div className="container mt-5">
          
          {/* Header & Toggle Button */}
          <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-2 mb-4">
            <h2 className="h4 m-0" style={{ color: '#61DAFB' }}>
              <i className="bi bi-box-seam me-2"></i> Zero to Infinity: Multi-Framework Integration Lab
            </h2>
            <button onClick={() => setCurrentView('homas')} className="btn btn-warning fw-bold shadow-sm">
              View Ed-Tech Landing Page ➔
            </button>
          </div>

          {/* Section 1: System Identity */}
          <div className="row mb-5">
            <div className="col-12">
              <StatusModule user={currentUser} onRefresh={handleRefresh} />
            </div>
          </div>

          {/* --- Section 2: Navigation Grid (Step-by-Step Order with Detailed Context) --- */}
          <div className="row g-4 mb-5">

            {/* Card 1: Props Lab */}
            <div className="col-md-3">
              <PathCard
                title="1. Props Lab"
                icon="🆔"
                iconColor="#27C8F5"
                desc="Atomic Architecture: Reusable Atoms (Avatar, InfoRow) driven by professional tech profile Props."
                framework="TAILWIND CSS"
                link="#profile-lab"
              />
            </div>

            {/* Card 2: Mapping Lab */}
            <div className="col-md-3">
              <PathCard
                title="2. Mapping Lab"
                icon="📊"
                iconColor="#F97316"
                desc="Dynamic Product Data Mapping: Advanced Array processing with Filter, Sort, and Cart logic."
                framework="TAILWIND CSS"
                link="#product-lab"
              />
            </div>

            {/* Card 3: Pinterest Grid */}
            <div className="col-md-3">
              <PathCard
                title="3. Pinterest Grid"
                icon="📌"
                iconColor="#E60023"
                desc="Masonry Layout Showcase: Implementing complex grid systems for responsive image heights."
                framework="BOOTSTRAP 5"
                link="#pinterest-demo"
              />
            </div>

            {/* Card 4: Tailwind UI */}
            <div className="col-md-3">
              <PathCard
                title="4. Tailwind UI"
                icon="⚡"
                iconColor="#38BDF8"
                desc="Digital UI Assets: Exploring Utility-first development with Deploy-ready Asset modules."
                framework="TAILWIND CSS"
                link="#tailwind-demo"
              />
            </div>

            {/* Navigation Grid */}
            <div className="col-md-3">
              <PathCard
                title="5. Hooks Lab"
                icon="🪝"
                iconColor="#A855F7"
                desc="State Management: Implementing useState for login, counters, and payment flows."
                framework="TAILWIND CSS"
                link="#hooks-lab"
              />
            </div>

            {/* Card 6: Axios Engine */}
            <div className="col-md-3">
              <PathCard
                title="6. Axios Engine"
                icon="📡"
                iconColor="#A855F7"
                desc="Advanced Data Fetching: Using Axios to retrieve and render complex product JSON objects."
                framework="TAILWIND CSS"
                link="#axios-lab"
              />
            </div>

          </div>

          {/* --- LIVE MODULES (Line by Line) --- */}

          {/* 1. Atomic Component Lab */}
          <div id="profile-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <ProfileLab userData={techUserData} />
          </div>

          {/* 2. Dynamic Product Mapping */}
          <div id="product-lab" className="mt-5 pt-5 border-t border-slate-800">
            <ProductModule />
          </div>

          {/* 3. Bootstrap Pinterest Showcase */}
          <div id="pinterest-demo" className="mt-5 pt-5 border-t border-secondary">
            <div className="p-4 rounded bg-black shadow-lg border border-secondary">
              <Pinterest />
            </div>
          </div>

          {/* 4. Tailwind Assets Showcase */}
          <div id="tailwind-demo" className="mt-5 pt-5 border-t border-slate-800">
            <TailwindShowcase onDeploy={handleDeploy} />
          </div>

          {/* 5. State Management Lab & 6. API User Engine */}
          <div id="hooks-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <StateLab />
            <UserEngine />
          </div>

          {/* 7. Axios Data Engine Lab */}
          <div id="axios-lab" className="mt-5 pt-5 border-t border-slate-800 flex flex-col items-center">
            <AxiosProducts />
          </div>

        </div>

      ) : (

        /* ---------------------------------------------------
           🟡 VIEW 2: HOMAS LANDING PAGE (New Design)
           --------------------------------------------------- */
        <div className="container mt-4">
          <button onClick={() => setCurrentView('home')} className="btn btn-outline-light mb-4 d-flex align-items-center gap-2">
            ⬅ Back to Portfolio Dashboard
          </button>
          
          <HomasIndex />
        </div>

      )}
      {/* ⚡ Conditional Rendering Logic End */}

    </div>
  );
}

export default App;