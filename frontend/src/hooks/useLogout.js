import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from '../features/auth/authSlice';

export const useLogout = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {userName, user} = useSelector((state) => {
        return state.auth;
    });

    const logOut = () => {
        dispatch(logout({userName, user}));

        localStorage.removeItem('user');
        localStorage.removeItem('username');

        navigate('/');
    }

    return { logOut };
}