import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  user_id: null,
  email: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: function(state, action) {
      state = action.payload;
    },
    logout: function(state) {
      state = initialState;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;