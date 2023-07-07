import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Input,
    Button
} from "@material-tailwind/react";

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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

            setUsername('');
            setEmail('');
            setPassword('');

            navigate('/login');
        }

    }


    return (
        <div className="py-28">
            <h1 className="text-center font-bold text-gray-800 mb-6 text-2xl md:text-3xl">Signup</h1>
            <form action="#" className="max-w-[30rem] space-y-6 mx-auto px-2" onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    label="Username" 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required 
                />
                <Input 
                    type="email" 
                    label="Email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
                <Input 
                    type="password" 
                    label="Password" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                {error ? <p className='text-xs text-red-600'>{error}</p> : <></>}
                <Button type="submit">Signup</Button>
                
            </form>
        </div>
    );
}
 
export default Signup;