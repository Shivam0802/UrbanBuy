import React from "react";
import Modal from "./Modal";
import Payment from "./Payment";

const ProductCard = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <>
        <div class="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl shadow-md">
            <div class="h-48 bg-gray-700 rounded-xl"></div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                        <span class="text-gray-700 font-normal font-comfortaa text-[1.8rem] mt-2" style={{ lineHeight: '1.12rem' }}>Long Chair</span>
                        <p class="text-xs text-gray-700">ID: 23432252</p>
                    </div>
                    <span class="font-medium font-comfortaa text-[1.4rem] text-red-600">₹25.99</span>
                </div>
                <div class="flex flex-row gap-2">
                    <span class="text-xs text-gray-700">Color: </span>
                    <div class="w-4 h-4 rounded-full bg-red-500"></div>
                    <div class="w-4 h-4 rounded-full bg-green-500"></div>
                    <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <div class="flex flex-row gap-2">
                    <button onClick={openModal} class="w-full hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Buy Now</button>
                    <button class="w-full hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
                </div>
            </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
            <Payment />
        </Modal>
        </>
    );
};

export default ProductCard;
