import React from "react";

const Payment = () => {

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="w-[32rem] bg-white rounded-lg border shadow-md mt-2 p-4">
            <h3 className="font-comfortaa font-medium text-[1.12rem] text-[#A91D3A] mb-2" style={{ lineHeight: '1.3rem' }}>ADD YOUR DELIVERY ADDRESS</h3>
            <hr className="border-b border-gray-200" />
            <div className="flex space-x-2 mt-4 mb-10">
                <input
                    type="text"
                    placeholder="Delivery Address"
                    className="border-b w-[100%] px-2 py-1 focus:outline-none border-gray-300"
                />
                <button className="bg-gradient-to-r from-[#093028] to-[#237A57] text-white rounded-full px-4 pt-1 text-[1.5rem] font-comfortaa font-normal" style={{ lineHeight: '1rem' }}>ADD</button>
            </div>
            <div className="flex items-center justify-between mt-4 px-2">
                <h3 className="font-comfortaa font-medium text-[1.12rem] text-[#A91D3A]" style={{ lineHeight: '1.3rem' }}>TOTAL</h3>
                <span className="font-bold text-[1.5rem] font-comfortaa">₹ 47.98</span>
            </div>
            <div className="flex justify-between gap-4">
                <button onClick={handleBack} className="w-full text-gray-600 rounded-lg px-4 py-1 text-[1rem] font-normal hover:underline" style={{ lineHeight: '1rem' }}>BACK</button>
                <button
                    className="w-full bg-gradient-to-r from-[#141E30] to-[#243B55] text-white rounded-full p-4 text-[1rem] font-normal"
                    style={{ lineHeight: '1rem' }}
                >
                    PROCEED TO PAY
                </button>
            </div>
        </div>
    );
}

export default Payment;