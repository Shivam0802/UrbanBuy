// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Modal from "./Modal";
// import Payment from "./Payment";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const CartList = ({ darkTheme, toggleTheme }) => {

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <>
//             <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
//             <div className={`flex ${darkTheme ? 'bg-[#1f1e20]' : 'bg-[#F1F1F1]'}`}>
//             <div className="flex flex-col ml-10 mt-4">
//                 <div className={`w-[60rem] rounded-t-[1rem] rounded-b-md border shadow-md m-8 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
//                     <h2 className={`ml-4 mt-6 text-[1.5rem] font-comfortaa font-medium ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} style={{ lineHeight: '1.3rem'}}>YOUR CART</h2>
//                     <hr className="border-b border-gray-200 mx-4" />
//                     <div className={`pb-4 mb-4 ${darkTheme ? 'bg-[#222831]' : 'bg-gray-100'}`}>
//                         {
//                             Array(2).fill().map((_, i) => (
//                                 <>
//                                     <div key={i} className="flex items-center justify-between mx-4 mt-2">
//                                         <div className="flex items-center space-x-4">
//                                             <img src="https://via.placeholder.com/50" alt="Cheese Burger" className="w-12 h-12" />
//                                             <div>
//                                                 <h3 className={`font-bold ${darkTheme ? 'text-gray-200' : 'text-black'}`}>Cheese Burger</h3>
//                                                 <p className={`${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>Extra Spicy</p>
//                                                 <p className={`${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>No mayo</p>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center space-x-2 border-2 border-gray-400 rounded-lg gap-[0.3rem] shadow-md">
//                                             <button className={`rounded px-2 ${darkTheme ? 'text-white' : 'text-black'}`}>-</button>
//                                             <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>2</span>
//                                             <button className={`rounded px-2 ${darkTheme ? 'text-white' : 'text-black'}`}>+</button>
//                                         </div>
//                                         <span className="font-bold text-[#DD5746]">₹ 23.99</span>
//                                     </div>
//                                     <hr className={`border-b m-4 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
//                                 </>
//                             ))
//                         }
//                     </div>
//                 </div>
//                 <div className={`w-[60rem] rounded-lg border shadow-md mx-8 mb-8 p-4 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
//                     <h3 className={`font-comfortaa font-medium text-[1.3rem] text-[#A91D3A] ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} mb-2 style={{ lineHeight: '1.3rem' }}>APPLY COUPONS</h3>
//                     <hr className="border-b border-gray-200" />
//                     <div className="flex space-x-2 mt-4">
//                         <input
//                             type="text"
//                             placeholder="Apply your coupons here"
//                             className={`border border-gray-300 rounded-lg px-2 py-2 w-full ${darkTheme ? 'bg-[#1b2123] text-white' : 'bg-white text-black'}`}
//                         />
//                         <button
//                             className="bg-gradient-to-r from-[#3C5B6F] to-[#373A40] text-white rounded-lg px-4 py-1 text-[1.5rem] font-comfortaa font-normal"
//                             style={{ lineHeight: '1rem' }}
//                         >
//                             Apply
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-4'>
//             <div className={`w-[32rem] h-fit rounded-b-[0.85rem] rounded-t-[0.85rem] border shadow-md m-8 p-4 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
//                 <h3 className={`font-comfortaa font-medium text-[1.3rem] text-[#A91D3A] ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} mb-2 style={{ lineHeight: '1.3rem' }}>CHECKOUT</h3>
//                 <hr className="border-b border-gray-200 mb-4" />
//                 <div className="mb-2">
//                     <div className="flex justify-between">
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Your cart subtotal:</span>
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 47.99</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Discount through applied coupons:</span>
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 3.99</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Shipping fees:</span>
//                         <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 4.99</span>
//                     </div>
//                     <hr className={`border-b my-2 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
//                     <div className="flex justify-between">
//                         <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`} >Total:</span>
//                         <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 57.99</span>
//                     </div>
//                 </div>
//                 <div className="flex justify-between items-center px-2 py-2 rounded-lg gap-6">
//                     <Link to="/" className='w-full'>
//                     <button className={`w-full rounded-lg p-[0.8rem] text-[1.5rem] font-comfortaa font-normal hover:underline ${darkTheme ? 'text-[#FFEDD8] hover:text-[#B0C5A4]' : 'text-[#344C64] hover:text-[#C73659]'}`} style={{ lineHeight: '1rem' }}>
//                         Continue shoping
//                     </button>
//                     </Link>
//                     <button className="w-full bg-[#c78585] text-white rounded-lg p-[0.8rem] text-[1.5rem] font-comfortaa font-normal" style={{ lineHeight: '1rem' }} onClick={openModal}>
//                         Proceed to pay
//                     </button>
//                 </div>
//             </div>
//             </div>
//         </div>
//             <Footer darktheme={darkTheme} />
//             <Modal isOpen={isModalOpen} onClose={closeModal}>
//                 <Payment />
//             </Modal>
//         </>
//     )
// }

//export default CartList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Payment from "./Payment";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartList = ({ darkTheme, toggleTheme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div className={`flex flex-col lg:flex-row ${darkTheme ? 'bg-[#1f1e20]' : 'bg-[#F1F1F1]'} p-4`}>
                <div className="flex flex-col lg:ml-6 lg:mt-4 w-full lg:w-[62%]">
                    <div className={`lg:w-[60rem] rounded-t-[1rem] rounded-b-md border shadow-md m-2 lg:m-8 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                        <h2 className={`ml-4 mt-6 text-[1.5rem] font-comfortaa font-medium ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} style={{ lineHeight: '1.3rem' }}>YOUR CART</h2>
                        <hr className="border-b border-gray-200 mx-4" />
                        <div className={`pb-4 mb-4 ${darkTheme ? 'bg-[#222831]' : 'bg-gray-100'}`}>
                            {
                                Array(2).fill().map((_, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 mt-2">
                                            <div className="flex items-center space-x-4">
                                                <img src="https://via.placeholder.com/50" alt="Cheese Burger" className="w-12 h-12" />
                                                <div>
                                                    <h3 className={`font-bold ${darkTheme ? 'text-gray-200' : 'text-black'}`}>Cheese Burger</h3>
                                                    <p className={`${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>Extra Spicy</p>
                                                    <p className={`${darkTheme ? 'text-gray-300' : 'text-gray-500'}`}>No mayo</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 border-2 border-gray-400 rounded-lg gap-[0.3rem] shadow-md mt-2 lg:mt-0">
                                                <button className={`rounded px-2 ${darkTheme ? 'text-white' : 'text-black'}`}>-</button>
                                                <span className={`${darkTheme ? 'text-white' : 'text-black'}`}>2</span>
                                                <button className={`rounded px-2 ${darkTheme ? 'text-white' : 'text-black'}`}>+</button>
                                            </div>
                                            <span className="font-bold text-[#DD5746] mt-2 lg:mt-0">₹ 23.99</span>
                                        </div>
                                        <hr className={`border-b m-4 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                    <div className={`lg:w-[60rem] rounded-lg border shadow-md m-2 lg:mx-8 mb-8 p-4 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                        <h3 className={`font-comfortaa font-medium text-[1.3rem] text-[#A91D3A] ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} mb-2 style={{ lineHeight: '1.3rem' }}>APPLY COUPONS</h3>
                        <hr className="border-b border-gray-200" />
                        <div className="flex space-x-2 mt-4">
                            <input
                                type="text"
                                placeholder="Apply your coupons here"
                                className={`border border-gray-300 rounded-lg px-2 py-2 w-full ${darkTheme ? 'bg-[#1b2123] text-white' : 'bg-white text-black'}`}
                            />
                            <button
                                className="bg-gradient-to-r from-[#3C5B6F] to-[#373A40] text-white rounded-lg px-4 py-1 text-[1.5rem] font-comfortaa font-normal"
                                style={{ lineHeight: '1rem' }}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 w-full lg:w-1/3'>
                    <div className={`lg:w-[32rem] h-fit rounded-b-[0.85rem] rounded-t-[0.85rem] border shadow-md m-2 lg:m-8 p-4 ${darkTheme ? 'bg-[#222831] border-gray-600' : 'bg-gray-100 border-gray-200'}`}>
                        <h3 className={`font-comfortaa font-medium text-[1.3rem] text-[#A91D3A] ${darkTheme ? 'text-[#FFF5E0]' : 'text-[#A91D3A]'}`} mb-2 style={{ lineHeight: '1.3rem' }}>CHECKOUT</h3>
                        <hr className="border-b border-gray-200 mb-4" />
                        <div className="mb-2">
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Your cart subtotal:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 47.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Discount through applied coupons:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 3.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Shipping fees:</span>
                                <span className={`${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 4.99</span>
                            </div>
                            <hr className={`border-b my-2 ${darkTheme ? 'border-gray-500' : 'border-gray-200'}`} />
                            <div className="flex justify-between">
                                <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>Total:</span>
                                <span className={`font-semibold text-[1.18rem] ${darkTheme ? 'text-gray-200' : 'text-gray-500'}`}>₹ 57.99</span>
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
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Payment />
            </Modal>
        </>
    );
}

export default CartList;
