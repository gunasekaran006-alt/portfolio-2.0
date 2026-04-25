import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, register, logout } from '../../redux/authSlice';

const AuthLab = () => {
  // Global State
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // Local State for Form Management
  const [view, setView] = useState('login'); // 'login' | 'register'
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  // Handlers
  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) return setError("All fields are required!");
    dispatch(register(form));
    setView('login');
    setForm({ username: '', email: '', password: '' });
    setError('');
    alert("Registration Successful! Please Login.");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return setError("Email and Password are required!");
    dispatch(login(form));
    // Check if login failed (We simulate this by checking if 'user' is still null after a short delay)
    setTimeout(() => { setError("Invalid Credentials or User Not Found!"); }, 100);
  };

  const handleLogout = () => {
    dispatch(logout());
    setForm({ username: '', email: '', password: '' });
    setError('');
  };

  return (
    <div className="w-full max-w-4xl bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl p-8 mb-10">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-800 pb-4 gap-4">
        <div className="text-[#27C8F5] text-lg md:text-xl font-black uppercase tracking-widest flex items-center gap-2">
          <span className="text-2xl">🔐</span> Authentication Engine (Redux)
        </div>
        <span className={`border text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full flex items-center gap-2 whitespace-nowrap ${user ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-orange-500/10 border-orange-500/30 text-orange-400'}`}>
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${user ? 'bg-emerald-400' : 'bg-orange-400'}`}></span>
          {user ? 'User Authenticated' : 'Awaiting Login'}
        </span>
      </div>

      <div className="flex justify-center">
        
        {/* ================= HOME VIEW (Logged In) ================= */}
        {user ? (
          <div className="w-full max-w-md bg-[#161b22] border border-slate-800 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#27C8F5] rounded-full filter blur-[80px] opacity-10"></div>
            <div className="w-20 h-20 bg-[#27C8F5]/10 border border-[#27C8F5]/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              👤
            </div>
            <h3 className="text-white text-2xl font-black mb-2">Welcome, {user.username}!</h3>
            <p className="text-slate-400 text-sm mb-8">{user.email}</p>
            
            <button 
              onClick={handleLogout}
              className="w-full bg-red-500/10 border border-red-500/30 text-red-500 font-black py-3 !rounded-full hover:!bg-red-500 hover:!text-white transition-all outline-none uppercase tracking-widest text-xs"
            >
              Secure Logout
            </button>
          </div>
        ) : (

        /* ================= LOGIN / REGISTER VIEW ================= */
          <div className="w-full max-w-md bg-[#161b22] border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#27C8F5] rounded-full filter blur-[80px] opacity-10"></div>
            
            <h3 className="text-[#27C8F5] text-lg font-black uppercase tracking-widest mb-6 text-center">
              {view === 'login' ? 'System Login' : 'Register Account'}
            </h3>

            {/* Error Message */}
            {error && !user && <p className="bg-red-500/10 border border-red-500/30 text-red-500 text-xs text-center p-2 rounded-lg mb-4 font-bold">{error}</p>}

            <form onSubmit={view === 'login' ? handleLogin : handleRegister} className="flex flex-col gap-4">
              
              {view === 'register' && (
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors"
                />
              )}

              <input 
                type="email" 
                placeholder="Email Address" 
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors"
              />

              <input 
                type="password" 
                placeholder="Password" 
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors"
              />

              <button 
                type="submit"
                className="w-full mt-4 bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] font-black py-3 !rounded-full hover:!bg-[#27C8F5] hover:!text-black transition-all outline-none uppercase tracking-widest text-xs"
              >
                {view === 'login' ? 'Login ➔' : 'Create Account ➔'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button 
                type="button"
                onClick={() => { setView(view === 'login' ? 'register' : 'login'); setError(''); }}
                className="text-slate-400 text-xs hover:text-[#27C8F5] transition-colors font-bold outline-none"
              >
                {view === 'login' ? "Don't have an account? Register here." : "Already have an account? Login here."}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default AuthLab;