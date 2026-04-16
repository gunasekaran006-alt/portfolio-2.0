import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TeamDirectory() {
  const [team, setTeam] = useState([]);
  const [form, setForm] = useState({ username: "", email: "", status: "Present" });
  const [editId, setEditId] = useState(null);

  const API = "https://my-json-server-api-8lqb.onrender.com/users";
  const standardCyan = "#27C8F5";

  const getTeam = async () => {
    try {
      const response = await axios.get(API);

      if (Array.isArray(response.data)) {
        setTeam(response.data);
      } else {
        setTeam([]);
      }

    } catch (error) {
      console.error("Server Error!", error);
      setTeam([]);
    }
  }

  useEffect(() => { getTeam(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) { await axios.put(`${API}/${editId}`, form); setEditId(null); }
    else { await axios.post(API, form); }
    setForm({ username: "", email: "", status: "Present" });
    getTeam();
  }

  return (
    <div className='w-full max-w-6xl mx-auto p-5 md:p-10 bg-black rounded-[30px] md:rounded-[45px] border border-slate-900 shadow-2xl mb-20'>

      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 uppercase tracking-[5px] sm:tracking-[8px]" style={{ color: standardCyan }}>
          CRUD Data Engine
        </h2>
        <p className="text-gray-600 text-[11px] tracking-[0.9em] uppercase font-bold">BENTO GRID ARCHITECTURE & REST API</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch'>

        {/* 🟢 LEFT: Form Section */}
        <div className='lg:col-span-5 bg-[#0a0a0a] p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-slate-800 flex flex-col justify-center min-h-[400px] md:min-h-[550px]'>
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-900 pb-4 text-center">Management Console</h3>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} className='w-full bg-black text-white p-4 border border-slate-800 rounded-2xl focus:border-[#27C8F5] outline-none transition-all' type="text" placeholder='Full Name' />
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className='w-full bg-black text-white p-4 border border-slate-800 rounded-2xl focus:border-[#27C8F5] outline-none transition-all' type="text" placeholder='Work Email' />
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className='w-full bg-black text-white p-4 border border-slate-800 rounded-2xl outline-none cursor-pointer'>
              <option value="Present">🟢 Present </option>
              <option value="Absent">🔴 Absent </option>
            </select>
            <button type="submit" className="btn-master-hub mt-4">
              {editId ? "UPDATE DATA ➔" : "EXECUTE ENTRY ➔"}
            </button>
          </form>
        </div>

        {/* 🔵 RIGHT: User List */}
        <div className='lg:col-span-7 flex flex-col gap-6'>
          {Array.isArray(team) && team.slice(0, 2).map(data => (
            <div key={data.id} className='flex-1 bg-[#0a0a0a] p-6 md:p-10 rounded-[30px] md:rounded-[40px] border border-slate-800 flex flex-col md:flex-row justify-between items-center group hover:border-[#27C8F5] transition-all duration-300 overflow-hidden'>

              <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-auto">
                <div>
                  {/* ⚡ Name and Status: flex-wrap added so they don't break on 320px */}
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                    <h4 className='text-white font-black text-3xl uppercase tracking-tighter group-hover:text-[#27C8F5] transition-colors truncate'>{data.username}</h4>
                    <span className={`text-[10px] px-4 py-1 rounded-full font-black border ${data.status === "Present" ? "text-green-400 border-green-500/20 bg-green-500/5" : "text-red-400 border-red-500/20 bg-red-500/5"}`}>
                      {data.status}
                    </span>
                  </div>
                  <p className='text-gray-500 text-xs md:text-sm font-bold mt-2 tracking-wide break-all md:break-normal'>{data.email}</p>
                </div>
              </div>

              {/* ⚡ ACTION BUTTONS: flex-1 for mobile, fixed width for desktop */}
              <div className='flex w-full md:w-auto gap-3 mt-6 md:mt-0 justify-between md:ml-auto md:pr-2'>
                <button
                  onClick={() => { setForm(data); setEditId(data.id) }}
                  className='flex-1 md:flex-none md:w-[120px] py-2 md:py-3 text-[#27C8F5] font-black text-[11px] uppercase tracking-widest border-2 border-slate-800 hover:bg-[#27C8F5] hover:text-black transition-all duration-300 shadow-sm'
                  style={{ borderRadius: '20px' }} 
                >
                  Edit
                </button>
                <button
                  onClick={async () => { await axios.delete(`${API}/${data.id}`); getTeam(); }}
                  className='flex-1 md:flex-none md:w-[120px] py-2 md:py-3 text-red-500 font-black text-[11px] uppercase tracking-widest border-2 border-red-900/20 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm'
                  style={{ borderRadius: '20px' }} 
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
          {/* Bento Symmetry Filler */}
          {team.length === 1 && <div className="flex-1 bg-transparent border border-dashed border-slate-900 rounded-[40px] hidden md:block"></div>}
        </div>

      </div>
    </div>
  );
}

export default TeamDirectory;