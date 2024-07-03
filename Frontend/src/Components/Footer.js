import React from "react";

const Footer = ({ darktheme }) => {
    return (
        <div className={`${darktheme ? 'bg-[#222831]' : 'bg-[#E8E8E8]'}`}>
            <div className='flex flex-col lg:flex-row relative p-4'>
                <div className='flex flex-col lg:w-[45%] p-4'>
                    <div className='flex items-center pl-4'>
                        {darktheme ? <img src='/Assets/logoDark.png' alt='logo' className='w-40 md:w-48 lg:w-60' /> : <img src='/Assets/logo.png' alt='logo' className='w-40 md:w-48 lg:w-60' />}
                    </div>
                    <div className='flex flex-col pl-6'>
                        <h1 className={`mt-2 font-comfortaa font-bold text-[1.9rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>About Us</h1>
                        <p className={`mt-1 font-comfortaa font-normal text-[1.5rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} `} style={{ lineHeight: '1.2rem' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='flex flex-col pl-6'>
                        <h1 className={`mt-2 font-comfortaa font-bold text-[1.9rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>Follow Us</h1>
                        <div className='flex items-center space-x-4 mt-1'>
                            <img src='/Assets/facebook.png' alt='facebook' className='w-8 h-8 cursor-pointer transform transition-transform hover:scale-110 hover:filter hover:brightness-150' />
                            <img src='/Assets/twitter.png' alt='twitter' className='w-[2.2rem] h-[2.2rem] cursor-pointer transform transition-transform hover:scale-110 hover:filter hover:brightness-150' />
                            <img src='/Assets/instagram.png' alt='instagram' className='w-[2.2rem] h-[2.2rem] cursor-pointer transform transition-transform hover:scale-110 hover:filter hover:brightness-150' />
                            <img src='/Assets/linkedin.png' alt='linkedin' className='w-8 h-8 cursor-pointer transform transition-transform hover:scale-110 hover:filter hover:brightness-150' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:w-[30%] p-4">
                    <div className='flex flex-col lg:w-[50%] p-6'>
                        <h1 className={`mt-2 font-comfortaa font-bold text-[1.9rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>Quick Links</h1>
                        <div className='flex flex-col mt-1'>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Home</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>About</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Services</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[50%] p-6">
                        <h1 className={`mt-2 font-comfortaa font-bold text-[1.9rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>Support</h1>
                        <div className='flex flex-col mt-1'>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Terms & Conditions</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Privacy Policy</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>Return Policy</a>
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>FAQ</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:w-[30%] p-4 mt-6'>
                    <h1 className={`mt-2 font-comfortaa font-bold text-[1.7rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>Contact Us</h1>
                    <div className='flex flex-col mt-1'>
                        <div className='flex items-center space-x-4'>
                            <img src='/Assets/phone.png' alt='phone' className='w-8 h-8 mr-1 mb-2' />
                            <a href='#' className={`mb-1 font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>
                                +91 1234567890
                            </a>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <img src='/Assets/email.png' alt='mail' className='w-8 h-8 mr-1 mb-2' />
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>
                                abc@gmail.com
                            </a>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <img src='/Assets/location.png' alt='location' className='w-8 h-8 mr-1 mb-2' />
                            <a href='#' className={`font-comfortaa font-normal text-[1.4rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'} hover:text-[#A8CD9F]`} style={{ lineHeight: '1.3rem' }}>
                                123, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-t-2 border-[#A8CD9F] mt-2 mx-6' />
            <footer className='flex items-center justify-center p-2'>
                <p className={`font-comfortaa font-normal text-[1.5rem] ${darktheme ? 'text-gray-300' : 'text-gray-600'}`}>© 2021 All rights reserved</p>
            </footer>
        </div>
    );
}

export default Footer;
