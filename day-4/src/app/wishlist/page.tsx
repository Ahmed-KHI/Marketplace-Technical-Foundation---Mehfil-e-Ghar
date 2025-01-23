"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2, PlusCircle, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  // Apply Discount
  const applyDiscount = () => {
    const discountCodes = {
      "SAVE10": 0.10, // 10% off
      "SAVE20": 0.20, // 20% off
    };

    const discount = discountCodes[discountCode.toUpperCase() as keyof typeof discountCodes] || 0;
    setDiscountAmount(discount);
  };

  const handleRemoveItem = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleQuantityChange = (id: string, action: "increase" | "decrease") => {
    const updatedWishlist = wishlistItems.map((item) =>
      item.id === id
        ? { ...item, quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1 }
        : item
    );
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem("wishlist");
  };

  const handleMoveToCart = () => {
    const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [];
    const updatedCart = [...cartItems, ...wishlistItems];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    handleClearWishlist(); // Clear wishlist after moving to cart
    alert("All items have been moved to your cart!");
  };

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        const parsedWishlist = JSON.parse(storedWishlist);
        const transformedWishlist: WishlistItem[] = parsedWishlist.map((item: WishlistItem) => ({
          ...item,
          quantity: item.quantity || 1, // Default quantity to 1
        }));
        setWishlistItems(transformedWishlist);
      } catch (error) {
        console.error("❌ Error parsing wishlist data:", error);
      }
    }
  }, []);

  const subtotal = wishlistItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountValue = subtotal * discountAmount;
  const total = subtotal - discountValue;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-cover bg-center py-16 mb-12 text-white">
        <div className="container text-center">
          <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
          <h1 className="text-4xl font-semibold mb-4 font-poppins">Wishlist</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <span>
              <Image src="/rightA.png" width={20} height={20} alt="arrow" />
            </span>
            <span>Wishlist</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Wishlist Items */}
        <Card className="col-span-2 md:col-span-1 bg-white shadow-lg rounded-lg border-2 border-gray-200">
          <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-gray-800">Wishlist Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 border-b py-4">
                    <div className="relative w-24 h-24 rounded-md overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="intrinsic"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Rs. {item.price}</p>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, "decrease")}
                          disabled={item.quantity <= 1}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleQuantityChange(item.id, "increase")}
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:bg-red-100 transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Your wishlist is empty.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Wishlist Summary */}
        <Card className="col-span-2 md:col-span-1 bg-white shadow-lg rounded-lg border-2 border-gray-200">
          <CardHeader className="bg-gray-100 p-4 rounded-t-lg">
            <CardTitle className="text-xl font-semibold text-gray-800">Wishlist Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              You have {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist.
            </p>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-semibold text-gray-800">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Discount:</span>
              <span className="font-semibold text-gray-800">
                Rs. {discountValue.toLocaleString()} ({discountAmount * 100}%)
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Total:</span>
              <span className="font-semibold text-gray-800">Rs. {total.toLocaleString()}</span>
            </div>

            <div className="mt-4 inline-grid">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Enter Discount Code"
                className="w-full p-2 border rounded-md"
              />
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={applyDiscount}
              >
                Apply Discount
              </Button>
            </div>
          </CardContent>
          <CardFooter className="inline-grid ">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:bg-indigo-700"
              onClick={handleMoveToCart}
            >
              Move All to Cart
            </Button>
            <Button
              className="w-full bg-red-500 text-white mt-2 hover:bg-red-600"
              onClick={handleClearWishlist}
            >
              Clear Wishlist
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
