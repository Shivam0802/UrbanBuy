import React from "react";
import Modal from "./Modal";
import AddDeliveryAddress from "./AddDeliveryAddress";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const ProductCard = ({ product }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const addToCart = async (product) => {
        try {
            const user = auth.currentUser;
            if (user) {
                const docRef = await addDoc(collection(db, "cart"), {
                    ...product,
                    userId: user.uid
                });
                console.log("Document written with ID: ", docRef.id);
            } else {
                console.log("No user is logged in");
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleAddToCart = async () => {
        await addToCart(product);
    };

    const image = product?.images?.length > 0 ? product.images[0] : 'default-image-url';
    const name = product?.name || 'Product Name';
    const price = product?.price || 0;

    return (
        <>
            <div className="w-80 h-[32rem] bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl shadow-md">
                <div className="bg-gray-700 rounded-xl">
                    <img src={image} alt="product" className="w-80 h-80 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col w-[70%]">
                            <span className="text-gray-700 font-normal font-comfortaa text-[1.8rem] mt-2" style={{ lineHeight: '1.12rem' }}>{name}</span>
                        </div>
                        <span className="font-medium font-comfortaa text-[1.4rem] text-red-600">₹ {price}</span>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="text-xs text-gray-700">Color: </span>
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button onClick={openModal} className="w-full hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Buy Now</button>
                        <button onClick={handleAddToCart} className="w-full hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <AddDeliveryAddress total={price} />
            </Modal>
        </>
    );
};

export default ProductCard;
