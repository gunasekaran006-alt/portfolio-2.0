import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
};

const notesSlice = createSlice({
    name: "entrinotes",
    initialState,
    reducers: {
        // 1. CREATE NOTE
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },
        // 2. DELETE NOTE
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(
                data => data.id !== action.payload
            );
        },
        // ⚡ NEW: 3. UPDATE NOTE ⚡
        updateNote: (state, action) => {
            // Extract new data from payload
            const { id, title, description, category } = action.payload;
            
            // Find the existing note by ID
            const existingNote = state.notes.find(note => note.id === id);
            
            // Replace old data with new data
            if (existingNote) {
                existingNote.title = title;
                existingNote.description = description;
                existingNote.category = category;
            }
        }
    }
});

// ⚡ Export updateNote action
export const { addNote, deleteNote, updateNote } = notesSlice.actions; 
export default notesSlice.reducer;