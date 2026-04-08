import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-dark bg-black border-bottom border-info py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-info" href="#">
          <i className="bi bi-cpu-fill me-2"></i>
          Portfolio 2.0 <span className="text-secondary ms-1 fs-6">| Enterprise Hub</span>
        </a>
        <span className="badge bg-transparent border border-success text-success rounded-pill px-3 py-2">
          <i className="bi bi-record-circle-fill me-1"></i> System Online
        </span>
      </div>
    </nav>
  );
}

export default Header;