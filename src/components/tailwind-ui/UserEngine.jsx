import React, { useEffect, useState } from 'react';

function UserEngine() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from the reliable JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false); // Stop loading when data arrives
      })
      .catch(err => {
        console.error("API Fetch Error:", err);
        setLoading(false); // Stop loading even if there is an error
      });
  }, []);

  return (
    <div className="bg-[#161b22] border border-slate-800 p-8 rounded-3xl shadow-2xl w-full max-w-2xl mt-12">
      <div className="flex flex-col items-center mb-8 border-b border-slate-800 pb-6 text-center">
        <h4 style={{ color: '#27C8F5' }} className="text-[14px] font-black uppercase tracking-[0.2em] mb-2">
           🌐 API User Engine
        </h4>
      </div>
      
      {loading ? (
        <p className="text-center text-slate-500 animate-pulse">Syncing Cloud Data...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
          {/* Displaying only the first 6 users */}
          {users.slice(0, 6).map(user => (
            <div key={user.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-500/50 transition-all cursor-pointer">
              <p className="text-[#27C8F5] text-xs font-bold capitalize">@{user.username}</p>
              <p className="text-slate-500 text-[10px] mt-1">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserEngine;