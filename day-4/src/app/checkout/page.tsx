"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { urlFor } from "../utils/sanity";
import Image from "next/image";

export default function Checkout() {
  const { cart } = useCart();
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const subTotal = cart.reduce(
    (total, item) => total + item.price * 1, // Assuming 1 quantity for each item, modify as needed
    0
  );

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "credit") {
      // Simulate Stripe payment processing (Replace with real API integration)
      try {
        alert(`Processing payment for card ending ${cardDetails.cardNumber.slice(-4)}`);
        // Replace with actual payment API call
        console.log("Payment successful!");
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please try again.");
      }
    } else {
      // Handle COD order submission
      alert("Order placed successfully with Cash on Delivery!");
    }
  };

  return (
    <div className="font-sans md:max-w-4xl mx-auto bg-transparent py-4 px-4">
      <h2 className="text-2xl font-bold text-gray-400">Checkout</h2>
      <hr className="border-gray-300 mt-4 mb-8" />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Billing Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={billingDetails.name}
                onChange={handleBillingChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleBillingChange}
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                value={billingDetails.phone}
                onChange={handleBillingChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="address"
                value={billingDetails.address}
                onChange={handleBillingChange}
                placeholder="Street Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleBillingChange}
                placeholder="City"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={billingDetails.postalCode}
                onChange={handleBillingChange}
                placeholder="Postal Code"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-300 mt-8 mb-4">Payment Method</h3>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                Cash on Delivery (COD)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                Credit / Debit Card
              </label>
            </div>

            {paymentMethod === "credit" && (
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  placeholder="Card Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  name="cvc"
                  value={cardDetails.cvc}
                  onChange={handleCardChange}
                  placeholder="CVC"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-orange-600 text-white rounded-md"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-300 mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.map((e) => (
              <div key={e._id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white p-2 rounded-md">
                    <Image
                      alt={e.name}
                      width={100}
                      height={100}
                      src={urlFor(e.image).width(400).url()}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-base font-bold text-gray-800">{e.name}</h4>
                </div>
                <div className="text-base font-bold text-gray-800">
                  ${e.price}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between mt-6">
              <span className="font-semibold text-gray-300">Subtotal:</span>
              <span className="font-semibold text-gray-300">${subTotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-300">Shipping:</span>
              <span className="font-semibold text-gray-300">$2.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-300">Tax:</span>
              <span className="font-semibold text-gray-300">$4.00</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-gray-300">Total:</span>
              <span className="text-xl font-bold text-gray-300">
                ${subTotal + 6}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
