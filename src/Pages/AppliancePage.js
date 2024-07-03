import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import { Appliances } from "../StaticData/staticData";
import { MdArrowRight } from "react-icons/md";

const FashionPage = ({ darkTheme, toggleTheme }) => {
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(15000);

    const handleMinChange = (e) => {
        setMinPrice(Number(e.target.value));
    };

    const handleMaxChange = (e) => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <>
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={`flex flex-col lg:flex-row bg-gray-50 ${darkTheme ? 'text-white' : 'text-black'}`}>
                <div className={`w-full lg:w-[38rem] p-3 ${darkTheme ? 'bg-[#1A2130]' : 'bg-gray-50'} text-gray-700`}>
                    <h1 className="text-2xl lg:text-[1.9rem] p-2 font-medium font-comfortaa text-[#FFA27F]" style={{ lineHeight: '1.2rem' }}>Filters</h1>
                    <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg`} />
                    <div className="flex flex-col p-2">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="price" className={`font-medium font-comfortaa text-[1.5rem] ${darkTheme ? 'text-white' : 'text-black'}`}>PRICE</label>
                            <button className="text-red-500" onClick={() => {
                                setMinPrice(0);
                                setMaxPrice(15000);
                            }}>CLEAR</button>
                        </div>
                        <input
                            type="range"
                            min="300"
                            max="30000"
                            value={minPrice}
                            onChange={handleMinChange}
                            className="w-full"
                        />
                        <div className="flex justify-between items-center mt-2">
                            <select
                                value={minPrice}
                                onChange={handleMinChange}
                                className="border p-1 rounded"
                            >
                                <option value="1000">₹1000</option>
                                <option value="2000">₹2000</option>
                                <option value="3000">₹3000</option>
                                <option value="4000">₹4000</option>
                                <option value="5000">₹7000</option>
                                <option value="6000">₹10000</option>
                                <option value="7000">₹15000</option>
                                <option value="8000">₹20000</option>
                                <option value="9000">₹25000</option>
                                <option value="10000">₹30000</option>
                            </select>
                            <span className="mx-2">to</span>
                            <select
                                value={maxPrice}
                                onChange={handleMaxChange}
                                className="border p-1 rounded"
                            >
                                <option value="5000">₹5000</option>
                                <option value="10000">₹10000</option>
                                <option value="15000">₹15000</option>
                                <option value="20000">₹20000</option>
                                <option value="25000">₹25000</option>
                                <option value="30000">₹30000</option>
                            </select>
                        </div>
                        <button className="bg-green-200 text-black text-[1.8rem] font-comfortaa font-normal p-1 rounded mt-2 pt-[0.8rem] hover:bg-green-400" style={{ lineHeight: '1.2rem' }}>Apply</button>
                    </div>
                    <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg mt-2`} />
                    <div className="flex flex-col p-2">
                        <h2 className="text-xl lg:text-[1.5rem] font-semibold mb-2 font-comfortaa" style={{ color: darkTheme ? '#FFFFFF' : '#333333' }}>CATEGORY</h2>
                        <div className="flex flex-col gap-2">
                            {
                                Appliances.map((item) => {
                                    return (
                                        <label key={item.id} className="flex flex-row items-center gap-2">
                                            <Link to={`/appliance/${item.desc}`} className="h-4 w-full flex flex-row gap-2 items-center hover:text-red-300">
                                                <MdArrowRight className="h-6 w-6" />
                                                <span className={`mt-1 font-comfortaa font-normal text-[1.5rem] ${darkTheme ? 'text-white' : 'text-black'} hover:text-red-300`}>{item.desc}</span>
                                            </Link>
                                        </label>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg mt-2`} />
                </div>
                <div className={`flex flex-col p-4 lg:p-6 ${darkTheme ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="flex flex-wrap gap-4">
                        {Array(10)
                            .fill(0)
                            .map((_, i) => (
                                <ProductCard key={i} darkTheme={darkTheme} />
                            ))}
                    </div>
                </div>
            </div>
            <Footer darktheme={darkTheme} />
        </>
    );
};

export default FashionPage;


