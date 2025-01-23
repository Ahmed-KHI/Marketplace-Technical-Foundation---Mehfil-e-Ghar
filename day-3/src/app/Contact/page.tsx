"use client";
import Head from "next/head";
import { BiSupport } from "react-icons/bi";
import { SlTrophy } from "react-icons/sl";
import { LuBadgeCheck } from "react-icons/lu";
import { MdLocationPin, MdPhone, MdAccessTimeFilled } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl text-[#000000] font-semibold text-center">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] text-center mt-2 mb-12">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[100px]">
            {/* Left Section */}
            <div className="flex flex-col space-y-8 px-6 sm:px-10">
              <div className="flex items-start space-x-4">
                <MdLocationPin className="text-[#000000] text-2xl -mt-3" />
                <div>
                  <h2 className="text-lg font-bold">Address</h2>
                  <p className="text-[#000000]">
                    236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                    States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MdPhone className="text-[#000000] text-2xl" />
                <div>
                  <h2 className="text-lg font-bold">Phone</h2>
                  <p className="text-[#000000]">
                    Mobile: +(84) 546-6789
                    <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MdAccessTimeFilled className="text-[#000000] text-2xl" />
                <div>
                  <h2 className="text-lg font-bold">Working Time</h2>
                  <p className="text-[#000000]">
                    Monday-Friday: 9:00 -
                    <br />
                    22:00
                    <br />
                    Saturday-Sunday: 9:00 -
                    <br />
                    21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <form className="grid grid-cols-1 p-0 space-y-10">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-[#000000]"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-[350px] mt-1 px-4 py-2 border border-[#9F9F9F] rounded-md focus:ring focus:ring-[#029FAE] focus:border-[#029FAE]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-[#000000]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="w-[350px] mt-1 px-4 py-2 border border-[#9F9F9F] rounded-md focus:ring focus:ring-[#029FAE] focus:border-[#029FAE]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-[#000000]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                  className="w-[350px] mt-1 px-4 py-2 border border-[#9F9F9F] rounded-md focus:ring focus:ring-[#029FAE] focus:border-[#029FAE]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-[#000000]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="w-[350px] mt-1 px-4 py-2 border border-[#9F9F9F] rounded-md focus:ring focus:ring-[#029FAE] focus:border-[#029FAE]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[200px] bg-[#029FAE] text-white py-2 px-4 rounded-tl-[2rem] rounded-br-[2rem] rounded-bl-[2rem] hover:bg-[#288d96] transition"
              >
                Submit
              </button>
            </form>
            <div className="bg-gray-100 w-[1100px] h-[200px] -ml-12">
              <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 mt-16 md:space-y-0">
                {/* High Quality */}
                <div className="flex items-center space-x-4">
                  <SlTrophy className="w-[60px] h-[60px] text-[#000000]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#000000]">
                      High Quality
                    </h3>
                    <p className="text-[#898989] text-sm">
                      crafted from top materials
                    </p>
                  </div>
                </div>

                {/* Warranty Protection */}
                <div className="flex items-center space-x-4">
                  <LuBadgeCheck className="w-[60px] h-[60px] text-[#000000]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#000000]">
                      Warranty Protection
                    </h3>
                    <p className="text-[#898989] text-sm">Over 2 years</p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="flex items-center space-x-4">
                  <BiSupport className="w-[60px] h-[60px] text-[#000000]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#000000]">
                      24 / 7 Support
                    </h3>
                    <p className="text-[#898989] text-sm">Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;