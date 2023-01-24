import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    showLoginModal: function(state) {
      state.show = true;
    },
    hideLoginModal: function(state) {
      state.show = false;
    },
  },
});

export const { showLoginModal, hideLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;