import React from "react";
import Modal from "./Modal";
import AddDeliveryAddress from "./AddDeliveryAddress";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const ProductList = ({ product }) => {
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
            <div className="w-full bg-gray-50 p-3 flex gap-4 rounded-2xl shadow-md">
                <div className="bg-gray-700 rounded-xl">
                    <img src={image} alt="product" className="w-60 h-60 object-cover rounded-xl" />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-between gap-2">
                        <div className="flex flex-col">
                            <span className="text-gray-700 font-normal font-comfortaa text-[3rem] mt-2" style={{ lineHeight: '1.12rem' }}>{name}</span>
                        </div>
                        <span className="font-medium font-comfortaa text-[2rem] text-red-600">₹ {price}</span>
                        <div className="flex flex-row gap-2">
                            <span className="text-[1.4rem] text-gray-400">category : {product.category}</span>
                        </div>
                        <div className="flex flex-row gap-2 mt-2">
                            <p className="text-xs text-gray-700">Color: </p>
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-green-500"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="flex flex-row gap-2 mt-8">
                            <button className="bg-[#80AF81] text-white px-4 pt-2 rounded-lg font-comfortaa font-normal text-[1.5rem]" onClick={handleAddToCart}>Add to Cart</button>
                            <button className="bg-[#E68369] text-white px-4 pt-2 rounded-lg font-comfortaa font-normal text-[1.5rem]" onClick={openModal}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <AddDeliveryAddress total={price} />
            </Modal>
        </>
    );
};

export default ProductList;
