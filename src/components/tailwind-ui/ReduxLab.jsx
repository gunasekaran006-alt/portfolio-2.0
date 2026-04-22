import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../redux/counterSlice';

const ReduxLab = () => {
  // Access Global State
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-4xl bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl p-8 mb-10">
      
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h4 className="text-[#27C8F5] text-xs font-black uppercase tracking-widest flex items-center gap-2">
          <span className="text-lg">🏦</span> Global State Architecture (Redux Toolkit)
        </h4>
        <span className="bg-slate-800 text-slate-400 text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full">
          Store Connected
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Module 1: Action Dispatcher (Like App.jsx) */}
        <div className="flex-1 bg-[#161b22] border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#27C8F5] rounded-full filter blur-[80px] opacity-10"></div>
          
          <h3 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">Component A: Dispatcher</h3>
          
          <div className="text-center mb-8">
             <div className="text-sm text-slate-400 mb-2">Global Counter Value</div>
             <div className="text-6xl font-black text-white">{count}</div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => dispatch(increment())}
              className="flex-1 bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] font-bold py-3 rounded-xl hover:bg-[#27C8F5] hover:text-black transition-colors"
            >
              + INCREASE
            </button>
            <button 
              onClick={() => dispatch(decrement())}
              disabled={count === 0}
              className={`flex-1 font-bold py-3 rounded-xl border transition-colors ${count === 0 ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed' : 'bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white'}`}
            >
              - DECREASE
            </button>
          </div>
        </div>

        {/* Module 2: Receiver (Like Home.jsx) */}
        <div className="flex-1 bg-[#161b22] border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
          <h3 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">Component B: Receiver</h3>
          
          <div className="bg-black/30 border border-slate-800 rounded-xl p-6 text-center">
            <p className="text-slate-400 text-sm mb-4">I am a completely different component, but I can read the same Global State!</p>
            <div className="text-3xl font-black text-[#27C8F5] mb-2">Sync: {count}</div>
          </div>

          <button 
            onClick={() => dispatch(reset())}
            className="w-full mt-6 bg-slate-800 border border-slate-700 text-white font-bold py-3 rounded-xl hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs"
          >
            Reset Global State
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReduxLab;