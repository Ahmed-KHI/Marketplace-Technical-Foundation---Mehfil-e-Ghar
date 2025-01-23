"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useWishList } from "@/context/WishlistContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BedroomSet {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function Bed() {
  const [bedroomSets, setBedroomSets] = useState<BedroomSet[]>([]);
  const { addToCart } = useCart();
  const { addToWishList } = useWishList();

  useEffect(() => {
    const fetchBedroomSets = async () => {
      const data: BedroomSet[] = [
        {
          _id: "1",
          title: "Modern Bedroom Set",
          description: "A modern bedroom set with a sleek design.",
          price: 999.99,
          imageUrl: "/bed-1.jpg",
        },
        {
          _id: "2",
          title: "Classic Bedroom Set",
          description: "A classic bedroom set with elegant details.",
          price: 799.99,
          imageUrl: "/bed-2.jpg",
        },
        {
          _id: "3",
          title: "Luxury Bedroom Set",
          description: "A luxury bedroom set with premium materials.",
          price: 1299.99,
          imageUrl: "/bed-3.jpg",
        },
        {
          _id: "4",
          title: "Vintage Bedroom Set",
          description: "A vintage bedroom set with timeless charm.",
          price: 699.99,
          imageUrl: "/bed-4.jpg",
        },
        {
          _id: "5",
          title: "Minimalist Bedroom Set",
          description: "A minimalist bedroom set with clean lines.",
          price: 899.99,
          imageUrl: "/bed-5.jpg",
        },
      ];
      setBedroomSets(data);
    };

    fetchBedroomSets();
  }, []);

  const handleAddToCart = (bedroomSet: BedroomSet) => {
    const product = {
      ...bedroomSet,
      inventory: 10, // Example value
      slug: bedroomSet.title.toLowerCase().replace(/ /g, "-"),
      category: "Bedroom",
      productType: "Furniture",
      brand: "Generic", // Example value
    };
    addToCart(product);
    toast.success(`${bedroomSet.title} added to cart!`);
  };

  const handleAddToWishlist = (bedroomSet: BedroomSet) => {
    const product = {
      ...bedroomSet,
      inventory: 10, // Example value
      slug: bedroomSet.title.toLowerCase().replace(/ /g, "-"),
      category: "Bedroom",
      productType: "Furniture",
      brand: "Generic", // Example value
    };
    addToWishList(product);
    toast.success(`${bedroomSet.title} added to wishlist!`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Bedroom Sets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bedroomSets.map((bedroomSet) => (
          <Card
            key={bedroomSet._id}
            className="w-full shadow-md border border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
          >
            {/* Enforce consistent image height */}
            <CardHeader className="p-0 overflow-hidden rounded-t-lg">
              <div className="w-full h-[200px]">
                {bedroomSet.imageUrl ? (
                  <Image
                    src={bedroomSet.imageUrl}
                    alt={bedroomSet.title}
                    width={350} // Fixed width
                    height={200} // Fixed height
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span>No Image Available</span>
                  </div>
                )}
              </div>
            </CardHeader>

            {/* Ensure consistent height for titles and descriptions */}
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold text-gray-900 h-[60px] overflow-hidden">
                {bedroomSet.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2 h-[40px] overflow-hidden">
                {bedroomSet.description}
              </p>
              <p className="text-lg font-bold text-gray-800 mt-4">
                £ {bedroomSet.price.toFixed(2)}
              </p>
            </CardContent>

            {/* Ensure buttons align across all cards */}
            <CardFooter className="p-4 flex items-center justify-between">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                onClick={() => handleAddToCart(bedroomSet)}
              >
                Add to Cart
              </Button>
              <Button
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
                onClick={() => handleAddToWishlist(bedroomSet)}
              >
                Add to Wishlist
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
