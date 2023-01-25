import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  id: null,
  email: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: function(state, action) {
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
    logout: function(state) {
      state = initialState;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;