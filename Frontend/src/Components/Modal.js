import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-[#EEEEEE] rounded-lg shadow-lg p-6 relative">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
