import React from 'react';

/**
 * PathCard Component
 * Logic: Responsive navigation card with dynamic framework tagging and detailed descriptions.
 */
function PathCard({ title, icon, iconColor, desc, link, framework }) {
  return (
    <a href={link} className="text-decoration-none h-100 d-block">
      <div 
        className="card bg-black border-secondary text-light h-100 p-4 shadow-sm"
        style={{ 
          cursor: 'pointer', 
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '20px',
          borderWidth: '1px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#27C8F5';
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0px 10px 25px rgba(39, 200, 245, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#334155';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Top Section: Icon & Framework Tag */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div style={{ 
            fontSize: '40px', 
            color: iconColor,
            filter: `drop-shadow(0 0 10px ${iconColor}33)`
          }}>
            {icon}
          </div>
          
          {/* ⚡ Dynamic Framework Tag */}
          <span className="text-[9px] bg-slate-900 text-slate-400 px-3 py-1.5 rounded-full font-bold border border-slate-800 uppercase tracking-widest">
             {framework}
          </span>
        </div>

        {/* Content Section */}
        <h3 className="h5 fw-bold mb-3" style={{ color: '#e6edf3', letterSpacing: '0.5px' }}>
          {title}
        </h3>
        
        <p className="text-secondary small mb-4" style={{ lineHeight: '1.6', minHeight: '60px' }}>
          {desc}
        </p>

        {/* Bottom Action: Enterprise Style */}
        <div 
          className="mt-auto pt-3 border-top border-slate-800 d-flex justify-content-between align-items-center"
          style={{ 
            fontSize: '11px', 
            fontWeight: '900', 
            color: '#27C8F5', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          <span>Explore Module</span>
          <span className="fs-6">➔</span>
        </div>
      </div>
    </a>
  );
}

export default PathCard;