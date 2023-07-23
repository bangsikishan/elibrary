import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from '../features/auth/authSlice';

export const useLogin = () => {
    const [error, setError] = useState(null);
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logIn = async (username, password) => {
        setError(null);

        const sanitizedCredentials = {
            username: username.trim(), 
            password: password.trim()
        }

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sanitizedCredentials)
        });

        const data = await response.json();

        if(data.error) {
            setError(data.error);
        }
        else {
            setError('');

            dispatch(login(data));
            
            localStorage.setItem('user', data.token);
            localStorage.setItem('username', data.username);
            
            navigate('/');
        }
    }

    return { error, logIn };
}