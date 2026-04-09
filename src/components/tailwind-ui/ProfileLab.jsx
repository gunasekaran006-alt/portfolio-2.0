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
 * Logic: Orchestrates all atoms and implements the Master Hub "Reverse Hover" UI
 */
function ProfileLab({ userData }) {
  return (
    <div className="bg-[#161b22] border border-slate-800 p-8 rounded-3xl shadow-2xl w-full max-w-sm hover:border-[#27C8F5]/50 transition-all duration-500 group">
      <div className="flex flex-col items-center">
        <UserAvatar image={userData.image} isOnline={userData.isOnline} />
        
        <h2 className="text-white text-xl font-black mt-4 group-hover:text-[#27C8F5] transition-colors">
            {userData.name}
        </h2>
        
        <span className="bg-[#27C8F5]/10 text-[#27C8F5] text-[10px] font-black px-3 py-1 rounded-full mt-2 uppercase tracking-tighter">
          {userData.role}
        </span>
      </div>

      <div className="mt-8 space-y-1">
        <InfoRow label="Expertise" value={userData.skills} />
        <InfoRow label="HQ" value={userData.location} />
        <InfoRow label="Experience" value={userData.experience} />
        
        <div className="mt-6 text-center">
            <p className="text-slate-400 text-xs italic leading-relaxed">
                {userData.bio || "No professional summary provided."}
            </p>
        </div>
      </div>

      {/* --- Master Hub Style: Accurate Bold Reverse Hover --- */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        
        {/* Follow Button (Filled Cyan) */}
        <button 
            className="btn btn-master-hub text-uppercase py-2 shadow-sm transition-all" 
            style={{ fontSize: '11px', fontWeight: '900' }} // Extra Bold for Master Hub look
        >
          Follow ➔
        </button>

        {/* Message Button (Accurate Bold Reverse Hover) */}
        <button 
          className="btn text-uppercase py-2 transition-all"
          style={{ 
            border: '2px solid #27C8F5', 
            fontSize: '11px',
            fontWeight: '900', // Making the text BOLD initially
            backgroundColor: 'transparent',
            color: '#27C8F5' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#27C8F5'; 
            e.target.style.color = '#000000'; // Text becomes Black on Hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#27C8F5'; // Text returns to Cyan
          }}
        >
          Message
        </button>
        
      </div>
    </div>
  );
}

export default ProfileLab;