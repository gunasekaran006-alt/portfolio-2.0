import React from 'react';

/** * Atom 1: UserAvatar 
 * Logic: Displays user image with a dynamic online pulse indicator
 */
const UserAvatar = ({ image, isOnline }) => (
  <div className="relative inline-block">
    <img 
      src={image} 
      alt="User Profile" 
      className="w-24 h-24 rounded-full object-cover border-2 border-[#27C8F5] p-1 shadow-lg shadow-[#27C8F5]/20" 
    />
    {isOnline && (
      <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#161b22] animate-pulse"></span>
    )}
  </div>
);

/** * Atom 2: InfoRow 
 * Logic: Reusable component for displaying professional metadata
 */
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-800">
    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{label}</span>
    <span className="text-[#27C8F5] text-sm font-medium">{value}</span>
  </div>
);

/** * Main Component: ProfileLab 
 * Features: Internal Vertical Header, Props Driven Data, Master Hub Buttons
 */
function ProfileLab({ userData }) {
  return (
    <div className="bg-[#161b22] border border-slate-800 p-8 rounded-3xl shadow-2xl w-full max-w-sm hover:border-[#27C8F5]/50 transition-all duration-500 group">
      
      {/* 🚀 INTERNAL HEADER: Vertical Title & Framework Tag */}
      <div className="flex flex-col items-center mb-8 border-b border-slate-800 pb-6 text-center">
        <h4 style={{ color: '#27C8F5' }} className="text-[14px] font-black uppercase tracking-[0.2em] mb-3">
           Atomic Component Lab
        </h4>        
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <UserAvatar image={userData.image} isOnline={userData.isOnline} />
        
        <h2 className="text-white text-xl font-black mt-4 group-hover:text-[#27C8F5] transition-colors text-center">
            {userData.name}
        </h2>
        
        <span className="bg-[#27C8F5]/10 text-[#27C8F5] text-[10px] font-black px-3 py-1 rounded-full mt-2 uppercase tracking-tighter">
          {userData.role}
        </span>
      </div>

      {/* Metadata Section */}
      <div className="mt-8 space-y-1">
        <InfoRow label="Expertise" value={userData.skills} />
        <InfoRow label="HQ" value={userData.location} />
        <InfoRow label="Experience" value={userData.experience} />
        
        <div className="mt-6 text-center px-2">
            <p className="text-slate-400 text-xs italic leading-relaxed">
                {userData.bio || "No professional summary provided."}
            </p>
        </div>
      </div>

      {/* --- Master Hub Style Buttons --- */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        
        {/* Follow Button (Uses Global btn-master-hub class) */}
        <button 
            className="btn btn-master-hub text-uppercase py-2" 
            style={{ fontSize: '11px', fontWeight: '900' }}
        >
          Follow ➔
        </button>

        {/* Message Button (Manual Reverse Hover Override) */}
        <button 
          className="btn text-uppercase py-2 transition-all"
          style={{ 
            border: '2px solid #27C8F5', 
            fontSize: '11px',
            fontWeight: '900', 
            backgroundColor: 'transparent',
            color: '#27C8F5' 
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#27C8F5'; 
            e.currentTarget.style.color = '#000000';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#27C8F5';
          }}
        >
          Message
        </button>
        
      </div>
    </div>
  );
}

export default ProfileLab;