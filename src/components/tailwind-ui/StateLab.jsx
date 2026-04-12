import React, { useState } from 'react';

function StateLab() {
  const [message, setMessage] = useState("System Locked");
  const [count, setCount] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  return (
    <div className="bg-[#161b22] border border-slate-800 p-8 rounded-3xl shadow-2xl w-full max-w-2xl hover:border-[#27C8F5]/50 transition-all duration-500 group">
      <div className="flex flex-col items-center mb-8 border-b border-slate-800 pb-6 text-center">
        <h4 style={{ color: '#27C8F5' }} className="text-[14px] font-black uppercase tracking-[0.2em] mb-2">
           State Management Lab
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logic: Basic Login & Payment */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 text-center">
            <p className={`text-sm font-bold mb-3 ${message === "System Locked" ? "text-orange-500" : "text-green-400"}`}>{message}</p>
            <button onClick={() => setMessage("Welcome, Admin")} className="btn-master-hub !py-1.5 !text-[10px]">Access System</button>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 text-center">
            <p className={`text-[10px] font-bold mb-3 p-2 rounded-lg ${isPaid ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
              {isPaid ? "✔ Payment Successful" : "✖ Payment Pending"}
            </p>
            <button onClick={() => setIsPaid(true)} className="w-full bg-transparent border-2 border-orange-500 text-orange-500 py-1.5 rounded-xl text-[10px] font-black hover:bg-orange-500 hover:text-black transition-all">Process Payment</button>
          </div>
        </div>

        {/* Logic: Counter */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center">
          <p className="text-5xl font-black text-[#27C8F5] mb-6">{count}</p>
          <div className="flex gap-2 w-full">
            <button onClick={() => setCount(count + 1)} className="flex-1 bg-green-500/20 text-green-500 py-2 rounded-lg text-xs font-bold">+</button>
            <button onClick={() => setCount(0)} className="flex-1 bg-slate-800 text-slate-400 py-2 rounded-lg text-xs font-bold">↻</button>
            <button disabled={count === 0} onClick={() => setCount(count - 1)} className="flex-1 bg-red-500/20 text-red-500 py-2 rounded-lg text-xs font-bold">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateLab;