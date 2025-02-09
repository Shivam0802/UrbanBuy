import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import { images } from "../StaticData/staticData"; // Assuming you have images imported

// Import Firebase Firestore functionalities
import { db } from "../firebase"; // Adjust the path as per your setup
import { collection, getDocs } from "firebase/firestore";

const Home = ({ darkTheme, toggleTheme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({
        fashion: false,
        accessories: false,
        furniture: false,
        appliances: false,
        toys: false,
        mensFashion: false,
        womensFashion: false,
        kidsFashion: false
    });
    const [topPicks, setTopPicks] = useState([]);
    const topPicksRef = useRef(null);

    const handleShopNowClick = () => {
        topPicksRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = (category) => {
        setDropdownOpen((prev) => {
            return {
                ...prev,
                [category]: !prev[category]
            };
        });
    };

    // Fetch top picks from Firestore on component mount
    useEffect(() => {
        const fetchTopPicks = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products")); // Adjust "products" to your collection name
                const products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTopPicks(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchTopPicks();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={`relative flex flex-col lg:flex-row h-28 justify-between ${darkTheme ? 'bg-[#222831]' : 'bg-[#E8E8E8]'}`}>
                <ul className="relative flex flex-wrap items-center justify-between w-full gap-4 px-4 lg:px-[14rem] z-10">
                    <Link to="/mobile" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`}>
                            <img src="/Assets/mobile.png" alt="logo" className="w-8 md:w-12 lg:w-16" />
                            Mobiles
                        </li>
                    </Link>
                    <Link to="/fashion" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`} onMouseEnter={() => toggleDropdown('fashion')} onMouseLeave={() => toggleDropdown('fashion')}>
                            <img src="/Assets/fashion.png" alt="logo" className="w-8 md:w-12 lg:w-16" />
                            Fashion
                        </li>
                    </Link>
                    <Link to="/assessories" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`} onMouseEnter={() => toggleDropdown('accessories')} onMouseLeave={() => toggleDropdown('accessories')}>
                            <img src="/Assets/assessories.png" alt="logo" className="w-8 md:w-12 lg:w-16 ml-[0.7rem]" />
                            Accessories
                        </li>
                    </Link>
                    <Link to="/furniture" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`} onMouseEnter={() => toggleDropdown('furniture')} onMouseLeave={() => toggleDropdown('furniture')}>
                            <img src="/Assets/furniture.png" alt="logo" className="w-8 md:w-12 lg:w-16 ml-[0.4rem]" />
                            Furniture
                        </li>
                    </Link>
                    <Link to="/appliance" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`} onMouseEnter={() => toggleDropdown('appliances')} onMouseLeave={() => toggleDropdown('appliances')}>
                            <img src="/Assets/appliances.png" alt="logo" className="w-8 md:w-12 lg:w-16 ml-4" />
                            Appliances
                        </li>
                    </Link>
                    <Link to="/sports" className="text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0">
                        <li className={`relative text-sm md:text-lg lg:text-2xl font-comfortaa font-medium mx-2 lg:mx-0 ${darkTheme ? 'text-white' : 'text-black'} cursor-pointer`} onMouseEnter={() => toggleDropdown('toys')} onMouseLeave={() => toggleDropdown('toys')}>
                            <img src="/Assets/books.png" alt="logo" className="w-8 md:w-12 lg:w-16 ml-10" />
                            Books, Sports & Toys
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={`${darkTheme ? 'bg-[#1f1e20] text-white' : 'bg-white text-black'} flex flex-col lg:flex-row w-full p-4 lg:p-6`}>
                <div className="flex flex-col w-full lg:w-[50%] p-4 lg:p-6 mt-6 lg:mt-10">
                    {darkTheme ? (
                        <img src="/Assets/UrbanBuyDark.png" alt="logo" className="w-fit mt-10 mx-auto lg:mx-0" />
                    ) : (
                        <img src="/Assets/UrbanBuy.png" alt="logo" className="w-fit mt-10 mx-auto lg:mx-0" />
                    )}
                    <br />
                    <p className="text-base md:text-xl lg:text-4xl font-normal font-comfortaa text-justify mt-6 mx-4 lg:mx-0" style={{ lineHeight: '1.3rem' }}>
                        Welcome to Urban Buy, your number one source for all things.
                        We're dedicated to giving you the very best of products, with a focus on three characteristics, dependability, customer service and uniqueness.
                    </p>
                    <button onClick={handleShopNowClick} className="text-base md:text-lg lg:text-3xl mt-6 mx-auto lg:mx-0 bg-gradient-to-r from-[#FF6969] to-[#2F3645] text-gray-200 pt-2 rounded-full font-comfortaa font-medium w-[10rem]">
                        Shop Now
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center w-full lg:w-[50%] mt-6 p-4">
                    <div className="relative w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[35rem] lg:h-[35rem]">
                        {images.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={`img-${image.id}`}
                                className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                style={{ width: '100%', height: '100%' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div ref={topPicksRef} className={`flex flex-col p-4 lg:p-6 ${darkTheme ? 'bg-[#1f1e20]' : 'bg-white'}`}>
                <div className="flex flex-row items-center justify-center my-10">
                    <hr className="border-2 border-[#667BC6] w-60 mr-10" />
                    <h1 className="text-xl lg:text-[5rem] font-semibold font-comfortaa" style={{ color: darkTheme ? '#FFD3B6' : '#80AF81' }}>Today's Top Picks</h1>
                    <hr className="border-2 border-[#667BC6] w-60 ml-10" />
                </div>
                <div className="flex flex-wrap justify-center gap-[2rem] mx-6">
                    {topPicks.map((product) => (
                        <ProductCard key={product.id} product={product} darkTheme={darkTheme} />
                    )).slice(0, 12)}
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center p-4 lg:p-2 ${darkTheme ? 'bg-[#31363F]' : 'bg-[#F5F7F8]'}`}>
                <div className="w-full lg:w-fit p-2 pb-6">
                    <h1 className="mb-4 text-2xl text-center lg:text-3xl font-semibold font-comfortaa" style={{ color: darkTheme ? '#FFD3B6' : '#E68369' }}>Subscribe to Our Newsletter</h1>
                    <form className="flex flex-col lg:flex-col gap-4">
                        <input
                            placeholder="Enter your email address"
                            className="bg-whites w-full lg:w-[40rem] text-gray-200 border-[0.02rem] border-gray-500 rounded-lg p-2 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="email"
                        />
                        <button
                            className={`text-white font-bold py-2 px-4 lg:px-6 rounded-lg ${darkTheme ? 'bg-gradient-to-r from-[#C33764] to-[#1D2671]' : 'bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]'}`}
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <Footer darktheme={darkTheme} />
        </>
    );
}

export default Home;
