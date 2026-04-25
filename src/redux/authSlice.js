import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // this array project as a temp database
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload);
    },
    login: (state, action) => {
      const user = state.users.find(
        (data) =>
          data.email === action.payload.email &&
          data.password === action.payload.password
      );
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;