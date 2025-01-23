"use client";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="overflow-x-hidden">
      {/* Top Line */}
      <div className="bg-[#272343] text-[#FFFFFF] text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <span className="hidden sm:block">✓ Free Shipping On All Orders Over $50</span>
          <div className="flex items-center gap-4">
          <select className="bg-[#272343] border-none rounded-tl-lg rounded-br text-cyan-500 cursor-pointer" name="language" id="language" aria-label="Select Language">
              <option value="en">Eng</option>
              <option value="en">Urdu</option>
              <option value="en">Arabic</option>
              <option value="en">Turkish</option>
              <option value="en">French</option>
              {/* Add more language options here */}
            </select>
            <Link href="/Faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="#" className="hover:underline hidden sm:block">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Line: Logo and Cart */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo Centered */}
          <div className="flex-1 text-center">
            <div className="flex space-x-2 justify-center sm:justify-start">
              <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold p-2 tracking-wide text-[#272343]">
                Comforty
              </span>
            </div>
          </div>
          <Link href="/Cart">
            <div className="flex items-center space-x-2 bg-white rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] px-4 py-2">
              {/* Cart Icon */}
              <Image 
                src="/cart.png" 
                alt="shopping-cart" 
                width={24} 
                height={24} 
                className="transition-transform duration-500 ease-in-out transform hover:scale-105"/>
              {/* Cart Text */}
              <span className="text-[#272343] font-medium">Cart</span>
              {/* Badge */}
              <span className="bg-[#007580] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>
          </Link>
          {/* Mobile menu icon */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line: Navigation Menu */}
      <nav className="bg-white border-t border-b-2 border-gray-300">
        <div className="container mx-auto w-full h-[74px] flex justify-between items-center px-4 py-4">
          {/* Menu Items */}
          <ul className="flex space-x-8 w-full justify-center sm:justify-start font-semibold">
            <li>
              <Link
                href="/"
                className="text-[#636270] hover:text-[#007580] transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Cart"
                className="text-[#636270] hover:text-[#007580]"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/SingleProduct"
                className="text-[#636270] hover:text-[#007580]"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/Product"
                className="text-[#636270] hover:text-[#007580]"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/AboutUs"
                className="text-[#636270] hover:text-[#007580]"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex mr-12 hover:underline whitespace-nowrap text-[#636270]">
            <a href="/Contact" className="font-medium tracking-wide">
              Contact
            </a>
            <span className="mr-2 font-semibold">:</span>
            <span className="text-gray-800 hover:text-[#007580] font-semibold">
              (808) 555-0111
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-md transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 p-4 text-[20px] text-gray-700 text-center">
          <li>
            <Link
              href="/"
              className="hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Cart"
              className="hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/SingleProduct"
              className="hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/Product"
              className="hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/AboutUs"
              className="hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              About
            </Link>
          </li>
          {/* Contact Info in Mobile Menu */}
          <li className="pt-4">
            <Link
              href="/Contact"
              className="text-[#636270] hover:text-[#007580]"
              onClick={handleMenuItemClick}
            >
              <p>Contact: (808) 555-0111</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;