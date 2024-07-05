import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const { name, cardNumber, expiry, cvc } = form;
    setIsFormValid(name !== '' && cardNumber !== '' && expiry !== '' && cvc !== '');
  }, [form]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [id]: value }));
  }

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Payment</h1>
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
              <input
                type="text"
                id="name"
                placeholder="Name on Card"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="CardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id='cardNumber'
                placeholder="Card Number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={form.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={form.expiry}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="CVC" className="block text-sm font-medium text-gray-700">CVC</label>
              <input
                type="text"
                id="cvc"
                placeholder="CVC"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={form.cvc}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={openModal}
              type="submit"
              className={`w-full py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${isFormValid ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Pay
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-2xl font-bold text-center mb-6">Payment Successful</h1>
        <p className="text-center">Thank you for your payment. Your order has been placed.</p>
      </Modal>
    </>
  );
}

export default PaymentPage;
