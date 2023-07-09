import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: null,
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.username;
            state.user = action.payload.token;
        },
        logout: (state) => {
            state.userName = null;
            state.user = null;
        }
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;