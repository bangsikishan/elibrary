import { Outlet } from "react-router-dom";

import Navbar from "../components/NavBar";

const RootLayout = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
 
export default RootLayout;