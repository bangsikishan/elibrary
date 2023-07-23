import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';

const storedUserToken = localStorage.getItem('user');
const storedUsername = localStorage.getItem('username');

const initialAuthState = {
    userName: storedUsername,
    user: storedUserToken,
  };

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState: {
        auth: initialAuthState
    }
});

export default store;