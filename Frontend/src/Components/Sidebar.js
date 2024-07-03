import React, { useState } from "react";

const Sidebar = ({ darkTheme }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(15000);

    const handleMinChange = (e) => {
        setMinPrice(Number(e.target.value));
    };

    const handleMaxChange = (e) => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <div className={`w-full lg:w-[38rem] p-3 ${darkTheme ? 'bg-[#1A2130]' : 'bg-gray-50'} text-gray-700`}>
            <h1 className="text-2xl lg:text-[1.9rem] p-2 font-medium font-comfortaa text-[#FFA27F]" style={{ lineHeight: '1.2rem' }}>Filters</h1>
            <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg`} />
            <div className="flex flex-col p-2">
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="price" className="font-normal font-comfortaa text-[1.7rem]">PRICE</label>
                    <button className="text-blue-500" onClick={() => {
                        setMinPrice(0);
                        setMaxPrice(15000);
                    }}>CLEAR</button>
                </div>
                <input
                    type="range"
                    min="0"
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
                <button className="bg-green-200 text-black text-[1.8rem] font-comfortaa font-normal p-1 rounded mt-2 pt-[0.8rem] hover:bg-green-400" style={{lineHeight:'1.2rem'}}>Apply</button>
            </div>
            <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg mt-2`} />
            <div className="flex flex-col p-2">
                <h2 className="text-xl lg:text-[1.5rem] font-semibold mb-2 font-comfortaa" style={{ color: darkTheme ? '#FFFFFF' : '#333333' }}>BRAND</h2>
                <div className="flex flex-col gap-2">
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Apple</span>
                    </label>
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Samsung</span>
                    </label>
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>OnePlus</span>
                    </label>
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Xiaomi</span>
                    </label>
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Realme</span>
                    </label>
                    <label className="flex flex-row items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>Oppo</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
