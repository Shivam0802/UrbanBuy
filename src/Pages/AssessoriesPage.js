import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import ProductList from "../Components/ProductList";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CiGrid42,CiViewList } from "react-icons/ci";

const FashionPage = ({ darkTheme, toggleTheme }) => {
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(15000);
    const [products, setProducts] = useState([]);
    const [veiw, setVeiw] = useState('grid');

    const handleMinChange = (e) => {
        setMinPrice(Number(e.target.value));
    };

    const handleMaxChange = (e) => {
        setMaxPrice(Number(e.target.value));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const q = query(collection(db, "products"), where("category", "==", "Assessories"));
            const querySnapshot = await getDocs(q);
            const productsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsList);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={`flex flex-col lg:flex-row bg-gray-50 ${darkTheme ? 'text-white' : 'text-black'}`}>
                <div className={`w-full lg:w-[20%] p-3 ${darkTheme ? 'bg-[#1A2130]' : 'bg-gray-50'} text-gray-700`}>
                    <h1 className="text-2xl lg:text-[1.9rem] p-2 font-medium font-comfortaa text-[#FFA27F]" style={{ lineHeight: '1.2rem' }}>Filters</h1>
                    <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg`} />
                    <div className="flex flex-col p-2">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="price" className={`font-medium font-comfortaa text-[1.5rem] ${darkTheme ? 'text-white' : 'text-black'}`}>PRICE</label>
                            <button className="text-red-500" onClick={() => {
                                setMinPrice(0);
                                setMaxPrice(100000);
                            }}>CLEAR</button>
                        </div>
                        <input
                            type="range"
                            min="300"
                            max="100000"
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
                                <option value="35000">₹35000</option>
                                <option value="40000">₹50000</option>
                                <option value="45000">₹70000</option>
                                <option value="50000">₹100000</option>

                            </select>
                        </div>
                        <button className="bg-green-200 text-black text-[1.8rem] font-comfortaa font-normal p-1 rounded mt-2 pt-[0.8rem] hover:bg-green-400" style={{ lineHeight: '1.2rem' }}>Apply</button>
                    </div>
                    <hr className={`border-1 ${darkTheme ? 'border-green-300' : 'border-gray-300'} rounded-lg mt-2`} />
                </div>
                <div className={`w-[92%] flex flex-col p-4 lg:p-6 ${darkTheme ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="flex justify-between items-center p-2">
                        <h1 className="text-2xl lg:text-[4rem] p-2 font-medium font-comfortaa text-[#FFA27F]" style={{ lineHeight: '1.2rem' }}>Assessories</h1>
                        <div className="flex gap-4">
                            <button onClick={() => setVeiw('grid')} className={`${veiw === 'grid' ? 'text-[#C73659]' : 'text-black'}`}>
                                <CiGrid42 size={35} />
                            </button>
                            <button onClick={() => setVeiw('list')} className={`${veiw === 'list' ? 'text-[#C73659]' : 'text-black'}`}>
                                <CiViewList size={35} />
                            </button>
                        </div>
                    </div>
                    {
                        veiw === 'grid' ? (
                            <div className="flex flex-wrap gap-4 pt-4">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-4 pt-4">
                                {products.map((product) => (
                                    <ProductList key={product.id} product={product} />
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer darktheme={darkTheme} />
        </>
    );
};

export default FashionPage;

