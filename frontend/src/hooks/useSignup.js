import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const signUp = async (username, email, password) => {
        setError('');

        const sanitizedCredentials = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        }

        const response = await fetch('http://localhost:3000/signup', {
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

            navigate('/login');
        }
    }

    return { error, signUp };
}