import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from '../../redux/notesSlice';

const NotesLab = () => {
    // Global State
    const notes = useSelector((state) => state.entrinotes.notes);
    const dispatch = useDispatch();

    // Local State for Form
    const [form, setForm] = useState({ title: "", description: "", category: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.description) return alert("Title and Description are required!");

        const newNote = {
            ...form,
            id: Date.now(),
            category: form.category || 'General' // Default category if empty
        };

        dispatch(addNote(newNote));
        setForm({ title: "", description: "", category: "" }); // Reset form
    };

    return (
        <div className="w-full max-w-6xl bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl p-8 mb-10">

            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-slate-800 pb-4 gap-4">
                <div className="text-[#27C8F5] text-lg md:text-xl font-black uppercase tracking-widest flex items-center gap-3">
                    <span className="text-2xl">📝</span> Redux Notes Database
                </div>
                <span className="bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(39,200,245,0.1)] whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27C8F5] animate-pulse"></span>
                    Total Records: {notes.length}
                </span>
            </div>

            {/* Main Grid: Form on left, List on right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* ================= FORM SECTION ================= */}
                <div className="lg:col-span-1">
                    <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#27C8F5] rounded-full filter blur-[80px] opacity-10"></div>

                        <h5 className="text-[#27C8F5] text-sm font-black uppercase tracking-widest mb-6">Create New Record</h5>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                placeholder="Note Title"
                                type="text"
                                className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors"
                            />

                            <textarea
                                value={form.description}
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                                placeholder="Note Description"
                                rows="4"
                                className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors resize-none"
                            ></textarea>

                            <input
                                value={form.category}
                                onChange={(e) => setForm({ ...form, category: e.target.value })}
                                placeholder="Category (e.g., Work, Personal)"
                                type="text"
                                className="w-full bg-[#0d1117] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#27C8F5] transition-colors"
                            />

                            <button
                                type="submit"
                                className="w-full mt-2 bg-[#27C8F5]/10 border border-[#27C8F5]/30 text-[#27C8F5] font-black py-3 !rounded-full hover:!bg-[#27C8F5] hover:!text-black transition-all outline-none uppercase tracking-widest text-xs"
                            >
                                + Insert Record
                            </button>
                        </form>
                    </div>
                </div>

                {/* ================= LIST SECTION ================= */}
                <div className="lg:col-span-2">
                    {notes.length === 0 ? (
                        <div className="bg-[#161b22] border border-slate-800 border-dashed rounded-2xl h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8">
                            <span className="text-4xl mb-4 opacity-50">📭</span>
                            <h2 className="text-slate-400 text-lg font-bold uppercase tracking-widest mb-2">Database is Empty</h2>
                            <p className="text-slate-600 text-sm">Start by inserting your first record using the form.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {notes.map(data => (
                                <div key={data.id} className="bg-[#161b22] border border-slate-800 hover:border-[#27C8F5]/50 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group">

                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-[#27C8F5] text-lg font-bold capitalize">{data.title}</h3>
                                            <span className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] px-2 py-1 rounded-md font-bold tracking-widest uppercase">
                                                {data.category}
                                            </span>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                            {data.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
                                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                            ID: {data.id.toString().slice(-6)}
                                        </span>
                                        <button
                                            onClick={() => dispatch(deleteNote(data.id))}
                                            className="text-[10px] font-black uppercase tracking-widest bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-1.5 !rounded-full hover:!bg-red-500 hover:!text-white transition-colors outline-none"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default NotesLab;