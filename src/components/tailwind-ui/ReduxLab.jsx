import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../redux/counterSlice';

const ReduxLab = () => {
  // Access Global State
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-4xl bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl p-8 mb-10">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-800 pb-4 gap-4">
        
        {/* ⚡ FIXED: Increased text size to text-lg md:text-xl to make it look like a Main Heading */}
        <div className="text-[#27C8F5] text-lg md:text-xl font-black uppercase tracking-widest flex items-center gap-2">
          <span className="text-2xl">🏦</span> Global State Architecture (Redux)
        </div>
        
        {/* Premium Live Connected Badge */}
        <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Store Connected
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Module 1: Action Dispatcher */}
        <div className="flex-1 bg-[#161b22] border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#27C8F5] rounded-full filter blur-[80px] opacity-10"></div>
          
          <div className="text-[#27C8F5] text-xs font-black uppercase tracking-widest mb-8">Component A: Dispatcher</div>
          
          {/* Content Area */}
          <div className="text-center mb-8 flex-1 flex flex-col justify-center">
             <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Global Counter Value</div>
             <div className="text-6xl font-black text-white">{count}</div>
          </div>

          <div className="flex gap-4 mt-auto">
            <button 
              onClick={() => dispatch(increment())}
              className="flex-1 bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] font-black py-3 !rounded-full hover:bg-[#27C8F5] hover:text-black transition-colors text-xs tracking-widest uppercase outline-none"
            >
              + INCREASE
            </button>
            <button 
              onClick={() => dispatch(decrement())}
              disabled={count === 0}
              className={`flex-1 font-black py-3 !rounded-full border transition-colors text-xs tracking-widest uppercase outline-none ${count === 0 ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed' : 'bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white'}`}
            >
              - DECREASE
            </button>
          </div>
        </div>

        {/* Module 2: Receiver */}
        <div className="flex-1 bg-[#161b22] border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col">
          
          <div className="text-[#27C8F5] text-xs font-black uppercase tracking-widest mb-8">Component B: Receiver</div>
          
          <div className="bg-black/30 border border-slate-800 rounded-xl p-6 text-center flex-1 flex flex-col justify-center mb-8">
            <p className="text-slate-400 text-xs leading-relaxed mb-4">I am a completely different component, but I can read the same Global State!</p>
            <div className="text-3xl font-black text-[#27C8F5] mb-2">Sync: {count}</div>
          </div>

          <button 
            onClick={() => dispatch(reset())}
            className="w-full mt-auto bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] font-black py-3 !rounded-full hover:bg-[#27C8F5] hover:text-black focus:bg-[#27C8F5] focus:text-black active:bg-[#27C8F5] active:text-black transition-all duration-300 uppercase tracking-widest text-xs outline-none"
          >
            Reset Global State
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReduxLab;