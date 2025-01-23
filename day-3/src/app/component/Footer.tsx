import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-16">
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="w-full">
          <h2 className="flex items-center space-x-2 text-xl font-semibold text-[#272343]">
            <Image
              src="/Logo Icon.png" 
              alt="Comforty Logo"
              width={40} 
              height={40} 
              className="object-contain"
            />
            <span>Comforty</span>
          </h2>

          <p className="mt-4 text-sm text-[#9A9CAA] leading-relaxed">
            Vivamus tristique odio sit amet velit semper,
            <br />
            eu posuere turpis interdum.
            <br />
            Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-6">
            {/* Social Media Icons */}
            <Link
              href="#"
              className="text-[#636270] hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-[#636270] hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-[#636270] hover:text-[#007580] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-[#636270] hover:text-red-500 transition-colors"
              aria-label="Pinterest"
            >
              <FaPinterest size={20} />
            </Link>
            <Link
              href="#"
              className="text-[#636270] hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="text-md mb-4 font-semibold text-[#9A9CAA] uppercase tracking-wider">
            Category
          </h3>
          <ul className="space-y-2">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((category, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="text-[#272343] hover:text-[#007580] hover:underline transition-colors text-sm"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-md font-semibold text-[#9A9CAA] uppercase tracking-wider mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((support, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="text-[#272343] hover:text-[#007580] hover:underline transition-colors text-sm"
                >
                  {support}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-md font-semibold text-[#9A9CAA] uppercase tracking-wider mb-4">
            Newsletter
          </h3>
          <form className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto mr-1 px-4 py-2 border border-gray-300 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] focus:outline-none focus:ring-2 focus:ring-[#007580] text-sm"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-[#007580] text-white px-4 py-2 rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[2rem] text-sm font-medium mt-4 sm:mt-0 sm:ml-2"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#9A9CAA] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-[#9A9CAA]">
          <p>
            Copyright 2024. Designed & Developed by{" "}
            <Link
              href="#"
              className="text-[#007580] hover:text-teal-800 transition-colors hover:font-semibold"
            >
              (00263838)
            </Link>
          </p>
          <div className="flex justify-between items-center space-x-4 cursor-pointer">
            <Image src="/Logos.png" alt="logos" width={160} height={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;