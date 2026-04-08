import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-black border-bottom border-info py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-info" href="#">
          <i className="bi bi-cpu-fill me-2"></i>
          Portfolio 2.0 <span className="text-secondary ms-1 fs-6 d-none d-sm-inline">| Enterprise Hub</span>
        </a>
        
        <div className="d-flex align-items-center gap-3">
          
          {/* Button 1: View Source Code (GitHub) */}
          
          <a 
            href="https://github.com/gunasekaran006-alt/portfolio-2.0.git" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-outline-secondary btn-sm"
          >
            <i className="bi bi-github me-1"></i> <span className="d-none d-md-inline">Source Code</span>
          </a>

          {/* Button 2: Back to Master Hub */}
         
          <a 
            href="https://gunasekaran006-alt.github.io/My-Portfolio/" 
            className="btn btn-outline-info btn-sm"
          >
            <i className="bi bi-house-door-fill me-1"></i> <span className="d-none d-md-inline">Master Hub</span>
          </a>

          {/* System Status Badge */}
          <span className="badge bg-transparent border border-success text-success rounded-pill px-3 py-2 d-none d-lg-inline-block">
            <i className="bi bi-record-circle-fill me-1"></i> System Online
          </span>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;