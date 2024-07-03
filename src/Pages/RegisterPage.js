import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FcLock, FcUnlock } from "react-icons/fc";
//import { FaLocationDot, FaTransgender } from "react-icons/fa6";

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='min-h-[100vh] p-4 flex flex-col items-center justify-center bg-gradient-to-tr from-[#0C0C0C] via-[#243B55] to-[#0C0C0C]'>
                <div className="bg-gray-100 w-[26.5rem] p-6 rounded-md shadow-2xl">
                    <h1 className="text-3xl text-center font-medium mb-2 text-[#7D8ABC] font-comfortaa font-medium text-3xl">Welcome to UrbanBuy</h1>
                    <p className="mb-2 text-center text-gray-800 font-comfortaa font-medium text-2xl">
                        Sign up to create an account
                    </p>
                    <hr className="mb-2" />
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-800 font-comfortaa text-2xl">
                                Name
                            </label>
                            <div className="flex items-center space-x-3 border rounded-md p-2 w-full bg-white">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    style={{ width: '90%', border: 'none', outline: 'none', color: '#151515' }}
                                />
                                <IoPersonSharp style={{ color: 'salmon', fontSize: '26px' }} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-m font-medium text-gray-800 font-comfortaa  text-2xl">
                                Email
                            </label>
                            <div className="flex items-center space-x-3 border rounded-md p-2 w-full bg-white">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    style={{ width: '90%', border: 'none', outline: 'none', color: '#151515' }}
                                />
                                <MdEmail style={{ color: 'teal', fontSize: '26px' }} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-m font-medium text-gray-800 font-comfortaa  text-2xl">
                                Contact
                            </label>
                            <div className="flex items-center space-x-3 border rounded-md p-2 w-full bg-white">
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    placeholder="+91 123-456-7890"
                                    required
                                    style={{ width: '90%', border: 'none', outline: 'none', color: '#151515' }}
                                />
                                <BsFillTelephoneFill style={{ color: 'slategray', fontSize: '26px' }} />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-1">
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-m font-medium text-gray-800 font-comfortaa  text-2xl">
                                    Password
                                </label>
                                <div className="flex items-center space-x-3 border rounded-md p-2 w-full bg-white">
                                    <input
                                        type={showPassword ? 'password' : 'text'}
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        style={{ width: '90%', border: 'none', outline: 'none', color: '#151515' }}
                                    />
                                    <div>
                                        {showPassword ? <img src="/Assets/eye.svg" alt="eye" style={{ width: '22px' }} onClick={handlePassword} /> : <img src="/Assets/eye_slash.svg" alt="eye" style={{ width: '22px' }} onClick={handlePassword} />}
                                    </div>
                                    <FcUnlock style={{ color: 'green', fontSize: '26px' }} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-m font-medium text-gray-800 font-comfortaa  text-2xl">
                                    Confirm Password
                                </label>
                                <div className="flex items-center space-x-3 border rounded-md p-2 w-full bg-white">
                                    <input
                                        type={showConfirmPassword ? 'password' : 'text'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        required
                                        style={{ width: '90%', border: 'none', outline: 'none', color: '#151515' }}
                                    />
                                    <div>
                                        {showConfirmPassword ? <img src="/Assets/eye.svg" alt="eye" style={{ width: '22px' }} onClick={handleConfirmPassword} /> : <img src="/Assets/eye_slash.svg" alt="eye" style={{ width: '22px' }} onClick={handleConfirmPassword} />}
                                    </div>
                                    <FcLock style={{ color: 'blue', fontSize: '26px' }} />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-3xl mt-4 w-full bg-gradient-to-r from-[#FF6969] to-[#2F3645] hover:from-[#45474B] hover:to-[#5A72A0] text-gray-200 pt-2 rounded-md font-comfortaa font-medium"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Register'}
                        </button>
                        <p className="mt-4 font-comfortaa font-normal text-2xl text-gray-800">
                            Don't have an account?{' '}
                            <Link to='/login' className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                    <div className="flex flex-row items-center justify-center">
                        <hr className="mr-3" style={{ width: '40%' }} />
                        <p className="text-m text-gray-800">
                            Or
                        </p>
                        <hr className="ml-3" style={{ width: '40%' }} />
                    </div>
                    <div className="mt-3 space-y-3">
                        <button
                            className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            type="button"
                        >
                            <span className="mr-2 inline-block">
                                <svg
                                    fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-rose-500"
                                >
                                    <path
                                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                    ></path>
                                </svg>
                            </span>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
