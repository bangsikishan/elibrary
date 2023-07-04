import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className='relative flex items-center justify-between h-14 border-b border-gray-500 px-8 sm:px-16 md:px-28'>
            <div>
                <h1 className='text-2xl font-bold'><NavLink to="/">ELibrary</NavLink></h1>
            </div>
            <div className='block sm:hidden'>
                <span className="material-symbols-outlined" onClick={() => setShowNav(!showNav)}>menu</span>
            </div>
            <div className='hidden sm:block'>
                <ul className='flex space-x-10'>
                    <li className='hover:underline'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:underline'><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            {showNav ? (
                <div className='absolute top-[56px] left-0 w-full z-10 bg-[#EFEFEF] sm:hidden'>
                    <ul className='flex flex-col items-center space-y-6 py-4'>
                        <li className='hover:underline'><NavLink to="/">Home</NavLink></li>
                        <li className='hover:underline'><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            ) : <></>}
        </nav>
    );
}
 
export default Navbar;