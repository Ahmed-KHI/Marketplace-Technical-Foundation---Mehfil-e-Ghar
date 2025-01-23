import React from "react";
import Image from "next/image";
import { FaShippingFast, FaHands, FaTags, FaRecycle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-6 md:px-10 mr-2">
        {/* Text Content */}
        <div className="bg-[#007580] text-[#FFFFFF] flex flex-col justify-center p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            About Us - Comforty
          </h2>
          <p className="text-base md:text-lg mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="mt-14 w-[190px] h-[56px] bg-[#029FAE] text-[#FFFFFF] px-10 py-2 rounded-sm font-medium hover:bg-[#165b61]">
            View Collection
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-lg h-[400px] md:h-[478px]">
            <Image
              src="/product-1.png"
              alt="Comforty Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Brand Difference Section */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What Makes Our Brand Different
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-[#F9F9F9] rounded-sm">
              <div className="mb-4 text-[#007580]">
                <FaShippingFast className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg text-[#007580] font-medium mb-2">
                Next Day as Standard
              </h4>
              <p className="text-[#007580] text-sm">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 bg-[#F9F9F9] rounded-sm">
              <div className="mb-4 text-[#007580]">
                <FaHands className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg text-[#007580] font-medium mb-2">
                Made by True Artisans
              </h4>
              <p className="text-[#007580] text-sm">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 bg-[#F9F9F9] rounded-sm">
              <div className="mb-4 text-[#007580]">
                <FaTags className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg text-[#007580] font-medium mb-2">
                Unbeatable Prices
              </h4>
              <p className="text-[#007580] text-sm">
                For our materials and quality, you won’t find better prices
                anywhere.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="text-center p-6 bg-[#F9F9F9] rounded-sm">
              <div className="mb-4 text-[#007580]">
                <FaRecycle className="h-8 w-8 mx-auto" />
              </div>
              <h4 className="text-lg text-[#007580] font-medium mb-2">
                Recycled Packaging
              </h4>
              <p className="text-[#007580] text-sm">
                We use 100% recycled materials to ensure our footprint is more
                manageable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#272343]">
            Our Popular Products
          </h3>
          <div className="flex flex-wrap justify-between items-start gap-6">
            {/* Product 1 */}
            <div className=" overflow-hidden flex-shrink-0 w-full sm:w-[48%] lg:w-[530px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Large.png"
                  alt="The Poplar suede sofa"
                  layout="fill"
                  objectFit="cover"
                  className=""
                  priority
                />
              </div>
              <div className="p-4 text-[#2A254B]">
                <h4 className="font-medium text-lg">The Poplar suede sofa</h4>
                <p className="">$99.00</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className=" overflow-hidden flex-shrink-0 w-full sm:w-[48%] lg:w-[280px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Parent1.png"
                  alt="The Dandy chair"
                  layout="fill"
                  objectFit="cover"
                  className=""
                  priority
                />
              </div>
              <div className="p-4 text-[#2A254B]">
                <h4 className="font-medium text-lg">The Dandy chair</h4>
                <p className="">$99.00</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className=" overflow-hidden flex-shrink-0 w-full sm:w-[48%] lg:w-[280px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Parent2.png"
                  alt="The Dandy chair"
                  layout="fill"
                  objectFit="cover"
                  className=""
                  priority
                />
              </div>
              <div className="p-4 text-[#2A254B]">
                <h4 className="font-medium text-lg">The Dandy chair</h4>
                <p className="">$99.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
