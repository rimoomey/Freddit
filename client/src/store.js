import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import loginModalReducer from './features/loginModal/loginModalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginModal: loginModalReducer,
  },
});