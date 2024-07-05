import React from "react";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = ({ total }) => {

  const handleDeliveryAddress = async (event) => {
    event.preventDefault();
    const deliveryAddress = {
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip: event.target.zip.value,
      country: event.target.country.value,
    };

    try {
      const User = localStorage.getItem("user");
      const userId = JSON.parse(User).uid;
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        deliveryAddress: deliveryAddress,
      });
      toast.success("Delivery address updated successfully", {
        position: toast.position,
      });
    } catch (error) {
      console.error("Error updating delivery address:", error);
      toast.error("Failed to update delivery address", {
        position: toast.position,
      });
    }
  };

  return (
    <div className="w-[32rem] bg-white rounded-lg border shadow-md mt-2 p-4">
      <h3 className="font-comfortaa font-medium text-[1.12rem] text-[#A91D3A] mb-2" style={{ lineHeight: '1.3rem' }}>ADD YOUR DELIVERY ADDRESS</h3>
      <hr className="border-b border-gray-200" />
      <form onSubmit={handleDeliveryAddress} className="mt-4 flex flex-col bg-[#F6F5F5] rounded-lg p-4 shadow-sm">
        <div className="mt-4">
          <label className="text-gray-900" htmlFor="address">Address</label>
          <textarea name="address" placeholder="Your address" className="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1" id="address" required></textarea>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-gray-900" htmlFor="city">City</label>
            <input name="city" placeholder="Your city" className="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1" id="city" type="text" required />
          </div>

          <div className="flex-1">
            <label className="text-gray-900" htmlFor="state">State</label>
            <input name="state" placeholder="Your state" className="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1" id="state" type="text" required />
          </div>
        </div>

        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-gray-900" htmlFor="zip">ZIP</label>
            <input name="zip" placeholder="Your ZIP code" className="w-full bg-gray-200 rounded-md border-gray-700 text-black px-2 py-1" id="zip" type="text" required />
          </div>

          <div className="flex-1">
            <label className="text-gray-900" htmlFor="country">Country</label>
            <select name="country" className="w-full bg-gray-200 rounded-md border-gray-700 text-gray-700 px-2 py-1" id="country" required>
              <option value="">Select a country</option>
              <optgroup label="Africa">
                <option value="AF">Afghanistan</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                <option value="ZW">Zimbabwe</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="AM">Armenia</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BH">Bahrain</option>
                <option value="YE">Yemen</option>
                <option value="IN">India</option>
              </optgroup>
              <optgroup label="South America">
                <option value="AR">Argentina</option>
                <option value="BO">Bolivia</option>
                <option value="BR">Brazil</option>
                <option value="VE">Venezuela</option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-blue-200 text-black rounded-md px-4 py-1 hover:bg-red-400 hover:text-white transition-all duration-200" type="submit">Submit</button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4 px-2">
        <h3 className="font-comfortaa font-medium text-[1.12rem] text-[#A91D3A]" style={{ lineHeight: '1.3rem' }}>TOTAL</h3>
        <span className="font-bold text-[1.5rem] font-comfortaa">₹ {total}</span>
      </div>
      <div className="flex justify-between gap-4 mt-6">
        <Link to="/payment">
          <button
            className="w-full bg-gradient-to-r from-[#141E30] to-[#243B55] text-white rounded-full p-4 text-[1rem] font-normal"
            style={{ lineHeight: '1rem' }}
          >
            PROCEED TO PAY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
