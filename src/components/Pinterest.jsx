import React from 'react'
import "./styles/pinterest.css";

function Pinterest() {
  return (
    <div>
         <h2 className="text-info mb-4" style={{ fontFamily: 'monospace' }}>
            <i className="bi bi-cpu"></i> Tech & Innovation Grid
         </h2>

    <div className="masonry-grid">

        {/* AI & Robotics */}
        <div className="item item-tall border border-info">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200" alt="AI Technology" />
        </div>

        {/* Coding & React */}
        <div className="item item-medium border border-info">
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200" alt="React Development" />
        </div>

        {/* Cyber Security / Matrix */}
        <div className="item item-small border border-info">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200" alt="Cyber Security" />
        </div>

        {/* Global Network / Cloud */}
        <div className="item item-tall border border-info">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200" alt="Cloud Infrastructure" />
        </div>

        {/* Hardware / Motherboard */}
        <div className="item item-medium border border-info">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" alt="Hardware Engineering" />
        </div>

        {/* Setup / Developer Desk */}
        <div className="item item-small border border-info">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200" alt="Developer Setup" />
        </div>

    </div>
    </div>
  )
}

export default Pinterest;