import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import CartList from './CartList';

const Navbar = ({ darkTheme, toggleTheme }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsMobileMenuOpen(false); // Close mobile menu when opening dropdown
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsDropdownOpen(false); // Close dropdown when opening mobile menu
    };

    return (
        <div className={`flex items-center justify-between h-[6.5rem] ${darkTheme ? 'bg-[#222831]' : 'bg-[#E8E8E8]'} px-4 md:pr-8 relative`}>
            <Link to='/'>
                <div className='flex items-center'>
                    {darkTheme ? <img src='/Assets/logoDark.png' alt='logo' className='w-40 md:w-48 lg:w-60' /> : <img src='/Assets/logo.png' alt='logo' className='w-40 md:w-48 lg:w-60' />}
                </div>
            </Link>
            <div className="w-[50%] flex flex-row bg-white border-solid border-2 border-[#A8CD9F] rounded-lg">
                <input
                    type="text"
                    placeholder="Search here for any kind product"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none"
                />
                <MdSearch size={30} className='mt-1 mr-2' />
            </div>
            <div className='hidden md:flex items-center space-x-4'>
                <div className='flex items-center justify-center'>
                    {darkTheme ? (
                        <img src='/Assets/light.png' alt='theme-toggle' className='w-6 h-6 cursor-pointer' onClick={toggleTheme} />
                    ) : (
                        <img src='/Assets/dark.png' alt='theme-toggle' className='w-6 h-6 cursor-pointer' onClick={toggleTheme} />
                    )}
                </div>
                <div className='flex items-center justify-center'>
                    <Link to='/cart' className='flex items-center justify-center'>
                    <img src='/Assets/cart.png' alt='cart' className='w-8 h-8' />
                    </Link>
                </div>
                <div className='flex items-center justify-center'>
                    <Link
                        to='/login'
                        className='bg-[#3C5B6F] text-white font-bold py-[0.5rem] px-[0.65rem] rounded-md shadow-md hover:bg-[#153448] focus:outline-none text-sm'
                    >
                        LOGIN
                    </Link>
                </div>
                <div className='flex items-center justify-center relative'>
                    {darkTheme ? (
                        <img
                            src='/Assets/darkdot.png'
                            alt='menu'
                            className='w-6 h-6 cursor-pointer'
                            onClick={toggleDropdown}
                        />
                    ) : (
                        <img
                            src='/Assets/lightdot.png'
                            alt='menu'
                            className='w-6 h-6 cursor-pointer'
                            onClick={toggleDropdown}
                        />
                    )}
                    {isDropdownOpen && (
                        <div className='absolute top-[2.5rem] right-0 w-[14.25rem] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
                            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-[1.5rem] font-comfortaa font-normal text-gray-700 hover:bg-gray-100'
                                    style={{ lineHeight: '1.12rem' }}
                                    role='menuitem'
                                >
                                    Notification Preferences
                                </a>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-[1.5rem] font-comfortaa font-normal text-gray-700 hover:bg-gray-100'
                                    style={{ lineHeight: '1.12rem' }}
                                    role='menuitem'
                                >
                                    24x7 Customer Care
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='md:hidden flex items-center'>
                {darkTheme ? (
                    <FiMenu size={24} className='cursor-pointer' onClick={toggleMobileMenu} style={{ color: 'whitesmoke' }} />
                ) : (
                    <FiMenu size={24} className='cursor-pointer' onClick={toggleMobileMenu} />
                )}
            </div>
            {isMobileMenuOpen && (
                <div className={`md:hidden w-full absolute top-[5rem] right-0  rounded-md p-4 ${darkTheme ? 'bg-gray-900 text-gray-200' : 'bg-gray-200 text-gray-900'}`}>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex gap-2'>
                            <h2 className='text-[1.5rem] font-comfortaa font-bold'>Theme</h2>
                            {darkTheme ? (
                                <img src='/Assets/light.png' alt='theme-toggle' className='w-6 h-6 cursor-pointer' onClick={toggleTheme} />
                            ) : (
                                <img src='/Assets/dark.png' alt='theme-toggle' className='w-6 h-6 cursor-pointer' onClick={toggleTheme} />
                            )}
                        </div>
                        <div className='flex gap-2'>
                            <h2 className='text-[1.5rem] font-comfortaa font-bold'>Cart</h2>
                            <img src='/Assets/cart.png' alt='cart' className='w-8 h-8' />
                        </div>
                        <div className='flex'>
                            <Link
                                to='/login'
                                className='bg-[#3C5B6F] text-white font-bold py-[0.5rem] px-[0.65rem] rounded-md shadow-md hover:bg-[#153448] focus:outline-none text-sm'
                            >
                                LOGIN
                            </Link>
                        </div>
                        <div className='flex relative'>
                            <button
                                type='button'
                                className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
                                id='options-menu'
                                aria-expanded='true'
                                aria-haspopup='true'
                                onClick={toggleDropdown}
                            >
                                menu
                            </button>
                            {isDropdownOpen && (
                                <div className='absolute top-[2.5rem] right-0 w-[14.25rem] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
                                    <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                                        <a
                                            href='#'
                                            className='block px-4 py-2 text-[1.5rem] font-comfortaa font-normal text-gray-700 hover:bg-gray-100'
                                            style={{ lineHeight: '1.12rem' }}
                                            role='menuitem'
                                        >
                                            Notification Preferences
                                        </a>
                                        <a
                                            href='#'
                                            className='block px-4 py-2 text-[1.5rem] font-comfortaa font-normal text-gray-700 hover:bg-gray-100'
                                            style={{ lineHeight: '1.12rem' }}
                                            role='menuitem'
                                        >
                                            24x7 Customer Care
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
