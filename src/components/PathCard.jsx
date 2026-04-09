import React from 'react';
import "./styles/pinterest.css"

function PathCard({ title, icon, iconColor, desc, link }) {
  return (
    <a href={link} className="text-decoration-none" target="_blank" rel="noreferrer">
      <div 
        className="card bg-black border-secondary text-light h-100 p-4 shadow-sm"
        style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#27C8F5';
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0px 0px 15px rgba(39, 200, 245, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#6c757d';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ fontSize: '35px', color: iconColor, marginBottom: '15px' }}>
          {icon}
        </div>
        <h3 className="h5 fw-bold" style={{ color: '#e6edf3' }}>{title}</h3>
        <p className="text-secondary small mb-4">{desc}</p>
        <div className="btn btn-outline-info btn-sm fw-bold w-100 mt-auto">
          Explore Module ➔
        </div>
      </div>
    </a>
  );
}

export default PathCard;