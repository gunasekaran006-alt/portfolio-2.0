import React, { useEffect, useState } from 'react';

function UserEngine() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#161b22] border border-slate-800 p-5 sm:p-8 rounded-3xl shadow-2xl w-full max-w-2xl mt-12">
      <div className="flex flex-col items-center mb-8 border-b border-slate-800 pb-6 text-center">
        <h4 style={{ color: '#27C8F5' }} className="text-[14px] font-black uppercase tracking-[0.2em] mb-2">
            🌐 API User Engine
        </h4>
      </div>
      
      {loading ? (
        <p className="text-center text-slate-500 animate-pulse">Syncing Cloud Data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {users.slice(0, 6).map(user => (
            <div key={user.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500/50 transition-all cursor-pointer flex flex-col justify-center overflow-hidden">
              
              {/* Username: truncate added */}
              <p className="text-[#27C8F5] text-xs font-bold capitalize truncate" title={user.username}>
                @{user.username}
              </p>
              
              {/* ⚡ FIX: 'break-all' removed, 'truncate' added. 'title' attribute shows full email on hover */}
              <p className="text-slate-500 text-[8px] mt-1 px-1 truncate" title={user.email}>
                {user.email}
              </p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserEngine;