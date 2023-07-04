import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="py-32">
            <h1 className="font-bold text-center text-gray-800 mb-10 text-2xl sm:text-3xl">About Us</h1>
            <div className="mx-10 text-center sm:mx-28 md:mx-52 md:text-left">
                <p>
                    Welcome to ELibrary, your ultimate online destination for all your reading needs. With our vast collection of books, 
                    you can search, discover, and read any book at your convenience.
                </p>
                <br />
                <p>
                    Immerse yourself in the world of literature and embark on an unforgettable reading journey with <NavLink to="/" className="underline">ELibrary</NavLink>.
                </p>
            </div>
        </div>
    );
}
 
export default About;