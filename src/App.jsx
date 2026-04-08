import React from 'react';
import Header from './components/Header';
import PathCard from './components/PathCard';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 pb-5">
      <Header />

      <div className="container mt-5">

        {/* Phase 1 Heading */}
        <h2 className="h4 border-bottom border-secondary pb-2 mb-4" style={{ color: '#27C8F5' }}>
          Phase 1: UI Foundations
        </h2>

        {/* Cards Row */}
        <div className="row g-4 mb-5">

          <div className="col-md-6">
            {/* First Card - Vanilla CSS */}
            <PathCard
              title="Vanilla CSS Architecture"
              icon="🎨"
              iconColor="#F16529"
              desc="100% Custom built from scratch. Flexbox, CSS Grid, Advanced Animations, and Media Queries without any frameworks."
              link="https://gunasekaran006-alt.github.io/My-Portfolio/vanilla-portfolio.html"
            />
          </div>

          <div className="col-md-6">
            {/* Second Card - Bootstrap 5 */}
            <PathCard
              title="Bootstrap 5 Framework"
              icon="⚡"
              iconColor="#7952B3"
              desc="Rapid UI development utilizing Bootstrap's grid system, utility classes, and pre-built components."
              link="https://gunasekaran006-alt.github.io/My-Portfolio/bootstrap-portfolio.html"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;