"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { urlFor } from "../../utils/sanity";

export default function Cart() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [discount, setDiscount] = useState(0);

  const { cart, removeFromCart, clearCart } = useCart();
  const subTotal = cart.reduce(
    (total, item) => total + item.price * (qty[item._id] || 1),
    0
  );
  const total = subTotal + 6 - discount; // Subtotal + shipping/tax - discount

  const validPromoCodes = {
    SAVE10: 10, // 10% discount
    SAVE20: 20, // 20% discount
  };

  const handleApplyPromo = () => {
    if (validPromoCodes[promoCode.toUpperCase()]) {
      const discountValue = (subTotal * validPromoCodes[promoCode.toUpperCase()]) / 100;
      setDiscount(discountValue);
      setPromoMessage(`Promo code applied! You saved $${discountValue.toFixed(2)}.`);
    } else {
      setDiscount(0);
      setPromoMessage("Invalid promo code. Please try again.");
    }
  };

  const increaseProduct = (id: string) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: (prevQty[id] || 0) + 1,
    }));
  };

  const decreaseProduct = (id: string) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: prevQty[id] > 0 ? prevQty[id] - 1 : 0,
    }));
  };

  const handleRemoveItem = (id: string) => {
    if (window.confirm("Are you sure you want to remove this item from the cart?")) {
      removeFromCart(id);
    }
  };

  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-transparent py-8 px-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          {cart.length === 0 ? (
            <p className="w-full text-center text-xl text-gray-600">No items in the cart</p>
          ) : (
            <div className="space-y-6">
              {cart.map((e) => (
                <div
                  key={e._id}
                  className="grid grid-cols-3 items-center gap-6 hover:bg-gray-50 transition-all duration-300 rounded-md"
                >
                  <div className="col-span-2 flex items-center gap-6">
                    <div className="w-28 h-28 bg-white p-2 rounded-lg shadow-md group relative">
                      <Image
                        alt={e.name}
                        width={100}
                        height={100}
                        src={urlFor(e.image).width(400).url()}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{e.name}</h3>
                      <h6
                        onClick={() => handleRemoveItem(e._id)}
                        className="text-sm text-red-600 cursor-pointer mt-1 hover:underline"
                      >
                        Remove
                      </h6>

                      <div className="flex gap-6 mt-4 items-center">
                        <div className="flex items-center space-x-4">
                          <button
                            type="button"
                            onClick={() => decreaseProduct(e._id)}
                            className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="text-sm text-gray-700">{qty[e._id] || 1}</span>
                          <button
                            type="button"
                            onClick={() => increaseProduct(e._id)}
                            className="px-3 py-1.5 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-auto">
                    <h4 className="text-lg font-semibold text-gray-800">
                      ${(e.price * (qty[e._id] || 1)).toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-xl sticky top-0">
          <div className="flex border border-orange-600 rounded-md overflow-hidden mb-6">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo code"
              className="w-full bg-white text-gray-600 text-sm px-4 py-2.5 rounded-l-md focus:outline-none"
            />
            <button
              type="button"
              onClick={handleApplyPromo}
              className="flex items-center justify-center font-semibold bg-orange-600 text-white text-sm px-4 py-2.5 hover:bg-orange-700 rounded-r-md"
            >
              Apply
            </button>
          </div>
          {promoMessage && (
            <p className="text-sm text-green-600 mb-4">{promoMessage}</p>
          )}

          <ul className="text-gray-800 space-y-4">
            <li className="flex justify-between text-base">
              Discount <span className="font-semibold">-${discount.toFixed(2)}</span>
            </li>
            <li className="flex justify-between text-base">
              Shipping <span className="font-semibold">$2.00</span>
            </li>
            <li className="flex justify-between text-base">
              Tax <span className="font-semibold">$4.00</span>
            </li>
            <li className="flex justify-between text-base font-semibold">
              Total <span className="font-semibold">${total.toFixed(2)}</span>
            </li>
          </ul>

          <div className="mt-6 space-y-4">
            <button
              type="button"
              className="w-full text-white bg-orange-600 hover:bg-orange-700 py-2.5 rounded-md font-semibold text-sm"
            >
              <Link href="/checkout">Proceed to Checkout</Link>
            </button>
            <button
              type="button"
              className="w-full bg-transparent text-gray-800 border border-gray-300 py-2.5 rounded-md font-semibold text-sm"
            >
              <Link href="/">Continue Shopping</Link>
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-white bg-red-600 hover:bg-red-700 py-2.5 rounded-md font-semibold text-sm"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
