import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaRegHeart, FaPlus, FaBlog } from 'react-icons/fa';
import { LuLogIn } from 'react-icons/lu';
import { BsSearch } from 'react-icons/bs';
import { IoBookmarkOutline } from 'react-icons/io5';
import logo from '../../assets/Logos/Logo3.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { id: 1, title: 'Blogs', url: '/posts', icon: <FaBlog size={18} /> },
        { id: 2, title: 'Create', url: '/createPost', icon: <FaPlus size={18} /> },
        { id: 3, title: 'Favorite', url: '/favorities', icon: <FaRegHeart size={18} /> },
        { id: 4, title: 'Bookmark', url: '/bookmarks', icon: <IoBookmarkOutline size={18} /> },
        { id: 5, title: 'Login', url: '/login', icon: <LuLogIn size={18} /> },
    ];

    return (
        <nav className="w-full shadow-md bg-white sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">

                <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
                    <img src={logo} alt="VoxHive Logo" className="w-28 min-w-[100px]" />
                </div>

                
                <div className="hidden lg:flex flex-1 items-center justify-between">
                    
                   
                    <div className="flex-1 flex justify-center">
                        <ul className="flex gap-5 text-gray-700 font-semibold">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.url}
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-300 hover:text-[#4c8f93] ${
                                                isActive ? 'underline decoration-2 underline-offset-4 text-[#042847] transition-all duration-300 font-medium' : ''
                                            }`
                                        }
                                    >
                                        {link.icon}
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                   
                    <div className="flex items-center border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-[#aa8db5">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="outline-none bg-transparent px-1 py-1"
                            aria-label="Search"
                        />
                        <BsSearch size={15} className="text-gray-500" />
                    </div>
                </div>

                
                <div className="lg:hidden ml-auto">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* ==========Mobile ============= */}
            <div
                className={`transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
                    menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col items-center gap-4 text-gray-700 font-semibold px-4 pb-4">
                    {navLinks.map((link) => (
                        <li key={link.id} className="w-full text-center">
                            <NavLink
                                to={link.url}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `flex justify-center items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-100 ${
                                        isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''
                                    }`
                                }
                            >
                                {link.icon}
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* --============= */}
                <div className="w-full px-4 pb-4">
                    <div className="flex items-center border rounded-md px-3 py-1 w-full focus-within:ring-2 focus-within:ring-blue-400">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full outline-none bg-transparent px-2 py-1"
                            aria-label="Mobile Search"
                        />
                        <BsSearch size={20} className="text-gray-500" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
