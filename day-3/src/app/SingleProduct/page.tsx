// Import required modules in a Next.js functional component
import React from "react";
import Image from "next/image";
import Link from "next/link";


const page: React.FC = () => {
  return (
    <div className="bg-white py-16 text-center ">
      {/* Featured Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mb-16 gap-36 ">
        <Image
          src="/product-2.png"
          alt="Library Stool Chair"
          width={675}
          height={670}
          className=" h-[] max-w-6xl rounded-lg object-cover"
        />
        <div className="text-left">
          <h2 className="text-5xl font-bold text-[#272343] mb-4 -mt-36">
            Library Stool
            <br />
            Chair
          </h2>

          <p className="px-6 py-3 w-[144] h-[44] font-semibold justify-center bg-[#029FAE] text-[#FFFFFF] rounded-full mb-4 ">
            $20.00 USD
          </p>

          <p className="text-[#272343] mt-10 border-t border-gray-200 mb-8 text-nowrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet,
            consectetur adipiscing
          </p>
          <button className="px-6 py-3 bg-[#029FAE] text-[#FFFFFF] rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] hover:bg-[#029FAE] transition flex items-center gap-2">
            <Image 
                            src="/cart.png" 
                            alt="shopping-cart" 
                            width={24} 
                            height={24} 
                            className="transition-transform duration-500 ease-in-out transform hover:scale-105"/>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>

      {/* Featured Products Section */}

      <div className="text-right mt-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-[#000000] text-left ">
          Featured Products
        </h3>
        <Link
          href="/Product"
          className="text-[#000000] font-semibold hover:underline hover:text-[#029FAE] underline"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto text-sm">
        {[
          { src: "/prodct3.png", title: "Library Stool Chair", price: "$99" },
          { src: "/product-1.png", title: "Library Stool Chair", price: "$99" },
          { src: "/image2.png", title: "Library Stool Chair", price: "$99" },
          { src: "/product-3.png", title: "Library Stool Chair", price: "$99" },
          { src: "/prodct1.png", title: "Library Stool Chair", price: "$99" },
          { src: "/01.png", title: "Library Stool Chair", price: "$99" },
        ].map((product, index) => (
          <div key={index} className="text-center">
            <Image
              src={product.src}
              alt={product.title}
              width={350}
              height={200}
              className="object-cover rounded-md mb-2 "
            />
            <div className="flex justify-between items-center">
              <p className="text-[#272343] font-medium">{product.title}</p>
              <p className="text-[#000000] font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
