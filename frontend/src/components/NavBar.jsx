import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-28 h-14 border-b border-gray-500'>
            <div>
                <h1 className='text-2xl font-bold'><NavLink to="/">ELibrary</NavLink></h1>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className='hover:underline'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:underline'><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;