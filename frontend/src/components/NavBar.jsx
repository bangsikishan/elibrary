import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const {userName, user} = useSelector((state) => {
        return state.auth;
    });
    
    const { logOut } = useLogout();

    const handleLogout = () => {
        logOut();
    }

    return (
        <nav className='relative flex items-center justify-between h-14 border-b border-gray-500 px-8 sm:px-16 md:px-28'>
            <div>
                <h1 className='text-2xl font-bold'><NavLink to="/">ELibrary</NavLink></h1>
            </div>
            <div className='block md:hidden'>
                <span className="material-symbols-outlined" onClick={() => setShowNav(!showNav)}>menu</span>
            </div>
            <div className='hidden md:block'>
                <ul className='flex space-x-8'>
                    {user && (<p className='font-semibold'>Hello, {userName}</p>)}
                    <li className='hover:underline'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:underline'><NavLink to="/about">About</NavLink></li>
                    {!user ? (
                        <>
                            <li className='hover:underline'><NavLink to="/login">Login</NavLink></li>
                            <li className='hover:underline'><NavLink to="/signup">Signup</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li className='hover:underline'><NavLink to="/add-book">Add</NavLink></li>
                            <button className='hover:underline' onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </ul>
            </div>
            {showNav ? (
                <div className='absolute top-[56px] left-0 w-full z-10 bg-[#EFEFEF] md:hidden'>
                    <ul className='flex flex-col items-center space-y-6 py-4'>
                        <li className='hover:underline'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:underline'><NavLink to="/about">About</NavLink></li>
                        {!user ? (
                            <>
                                <li className='hover:underline'><NavLink to="/login">Login</NavLink></li>
                                <li className='hover:underline'><NavLink to="/signup">Signup</NavLink></li>
                            </>
                        ) : (
                            <>
                                <li className='hover:underline'><NavLink to="/add-book">Add</NavLink></li>
                                <button className='hover:underline' onClick={handleLogout}>Logout</button>
                            </>
                        )}
                    </ul>
                </div>
            ) : <></>}
        </nav>
    );
}
 
export default Navbar;