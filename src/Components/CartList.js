import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db, auth } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import Modal from "./Modal";
import AddDeliveryAddress from "./AddDeliveryAddress";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartList = ({ darkTheme, toggleTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    setUser(storedUser);
                } else {
                    setUser(null);
                }

                const userID = JSON.parse(storedUser).uid;

                const querySnapshot = await getDocs(collection(db, 'cart'));

                const items = querySnapshot.docs
                    .filter((doc) => doc.data().userId === userID)
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                localStorage.setItem("cartItems", JSON.stringify(items));
                setCartItems(items);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, []);

    const handleRemove = async (id) => {
        try {
            const cartitems = localStorage.getItem("cartItems");
            const id = JSON.parse(cartitems)[0].id;
            await deleteDoc(doc(db, 'cart', id));

            const updatedCartItems = cartItems.filter((item) => item.id !== id);
            setCartItems(updatedCartItems);
        }
        catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };


    const cartSubtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')), 0);
    const shippingFees = 40;
    const gst = (18 / 100) * cartSubtotal;
    const total = cartSubtotal + shippingFees + gst;

    return (
        <>
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={`flex flex-col lg:flex-row ${darkTheme ? 'bg-[#1f1e20]' : 'bg-[#F1F1F1]'} p-4`}>
                <div className="flex flex-col lg:ml-6 lg:mt-4 w-full lg:w-[62%]">
                    <div className={`lg:w-[60rem] rounded-t-[1rem] rounded-b-md border shadow-md m-2 lg:m-8 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                        <h2 className={`ml-4 mt-6 text-[1.5rem] font-comfortaa font-medium ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} style={{ lineHeight: '1.3rem' }}>YOUR CART</h2>
                        <hr className="border-b border-gray-200 mx-4" />
                        <div className={`pb-4 mb-4 ${darkTheme ? 'bg-[#222831]' : 'bg-gray-100'}`}>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 mt-2">
                                            <div className="flex items-center space-x-4">
                                                <img src={item.images[0] || "https://via.placeholder.com/50"} alt={item.name} className="w-12 h-12" />
                                                <div>
                                                    <h3 className={`font-bold ${darkTheme ? 'text-gray-200' : 'text-black'}`}>{item.name}</h3>
                                                    <p className={`${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>{item.category || ""}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center space-x-4">
                                                <span className="font-bold text-[#DD5746] mt-2 lg:mt-0">₹ {item.price}</span>
                                                <button className="text-[#40A578] font-bold" onClick={handleRemove}>Remove</button>
                                            </div>
                                        </div>
                                        <hr className={`border-b m-4 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
                                    </React.Fragment>
                                ))
                            ) : (
                                <p className={`text-center ${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>Your cart is empty</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className='mt-4 w-full lg:w-1/3'>
                    <div className={`lg:w-[32rem] h-fit rounded-b-[0.85rem] rounded-t-[0.85rem] border shadow-md m-2 lg:m-8 p-4 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                        <h3 className={`font-comfortaa font-medium text-[1.3rem] ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} mb-2 style={{ lineHeight: '1.3rem' }}>CHECKOUT</h3>
                        <hr className="border-b border-gray-200 mb-4" />
                        <div className="mb-2">
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Your cart subtotal:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ {cartSubtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Shipping fees:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ {shippingFees}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>GST:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ {gst}</span>
                            </div>
                            <hr className={`border-b my-2 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
                            <div className="flex justify-between">
                                <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Total:</span>
                                <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ {total}</span>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between items-center px-2 py-2 rounded-lg gap-6">
                            <Link to="/" className='w-full'>
                                <button className={`w-full rounded-lg p-[0.8rem] text-[1.5rem] font-comfortaa font-normal hover:underline ${darkTheme ? 'text-[#FFEDD8] hover:text-[#B0C5A4]' : 'text-[#344C64] hover:text-[#C73659]'}`} style={{ lineHeight: '1rem' }}>
                                    Continue shopping
                                </button>
                            </Link>
                            <button className="w-full bg-[#c78585] text-white rounded-lg p-[0.8rem] text-[1.5rem] font-comfortaa font-normal" style={{ lineHeight: '1rem' }} onClick={openModal}>
                                Proceed to pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer darktheme={darkTheme} />
            <Modal isOpen={isModalOpen} onClose={closeModal} >
                <AddDeliveryAddress total={total} />
            </Modal>
        </>
    );
};

export default CartList;
