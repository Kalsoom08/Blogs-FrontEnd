import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Image from '../../assets/Logos/Logo3.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Nav = [
        { title: "Home", url: "/" },
        { title: "Profile", url: "/profile" },
        { title: "Register", url: "/register" },
        { title: "Login", url: "/login" }
    ];

    return (
        <nav className="w-full shadow-md bg-white">
            <div className="justify-between container mx-auto flex items-center md:justify-around py-2 px-6 ">
          
                <div className="flex items-center"> 
                    <img src={Image} alt="Logo" className="w-40 md:w-48" />
                </div>

        
                <ul className="hidden md:flex items-center gap-6 text-gray-700 font-semibold">
                    {Nav.map((item, index) => (
                        <li key={index} className="hover:text-blue-500 transition-colors">
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                
                <div className="hidden md:block">
                    <input
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

               
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
                        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

           
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 pb-6">
                    <ul className="flex flex-col items-center gap-4 text-gray-700 font-semibold">
                        {Nav.map((item, index) => (
                            <li key={index} className="hover:text-blue-500 transition-colors">
                                <Link to={item.url} onClick={() => setMenuOpen(false)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="w-4/5">
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
