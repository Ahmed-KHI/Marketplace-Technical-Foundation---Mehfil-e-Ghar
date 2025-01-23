import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 lg:px-0 container mx-auto flex-col space-y-10">
        <div className="flex flex-col lg:flex-row items-center p-8 bg-[#F0F2F3] rounded-bl-3xl border border-gray-100 w-full max-w-6xl ml-32 mr-32">
          <div className="flex flex-col items-start gap-4 text-center lg:text-left p-12">
            <p className="text-sm text-gray-500 tracking-wide">
              Welcome to Chairy
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Best Furniture
              <br className="hidden md:block" />
              Collection For Your
              <br className="hidden md:block" />
              Interior.
            </h1>

            <button className="bg-[#029FAE] w-[171px] text-[#FFFFFF] py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-[#007580] mx-auto sm:mx-0">
              <span>Shop Now</span>
              <FaArrowRight />
            </button>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <Image
              src="/Product Image.png"
              alt="Chair Image"
              width={434}
              height={584}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6 flex justify-center items-center gap-12 sm:gap-16 md:gap-20 flex-wrap">
          {[
            "zapier",
            "pipedrive",
            "cib-bank",
            "burnt-toast",
            "pandadoc",
            "moz",
            "home sm logo7",
          ].map((logo, index) => (
            <Image
              key={index}
              src={`/${logo}.png`}
              alt={logo}
              width={85}
              height={87}
              className="h-auto w-auto"
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#272343] mb-8 ml-14">
          Featured Products
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["product-1", "product-2", "product-3", "product-4"].map(
              (product, i) => (
                <div key={i} className="w-80">
                  <div className="relative w-[312px] h-[377px]">
                    <Image
                      src={`/${product}.png`}
                      alt={product}
                      width={312}
                      height={312}
                      className="object-cover w-[290px] h-[290px]"
                    />
                    {i === 1 && (
                      <span className="absolute top-2 left-2 bg-red-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                    {i === 0 && (
                      <span className="absolute top-2 left-2 bg-green-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded">
                        New
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-[#272343]">
                        Library Stool Chair
                      </h3>
                      <div className="w-13 mr-5 px-2 py-2 bg-[#F0F2F3] rounded-lg flex items-center justify-center">
                        <button>
                          <Image 
                                          src="/cart.png" 
                                          alt="shopping-cart" 
                                          width={24} 
                                          height={24} 
                                          className="transition-transform duration-500 ease-in-out transform hover:scale-105"/>
                        </button>
                      </div>
                    </div>
                    <p className="text-[#272343] font-bold mt-2">
                      $20{" "}
                      {i === 1 && (
                        <span className="text-[#9A9CAA] line-through text-sm ml-2">
                          $30
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#272343] mb-8 ml-12">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-12 mr-12">
          {[
            {
              name: "Wing Chair",
              count: "3,584 Products",
              image: "wing-chair",
            },
            {
              name: "Wooden Chair",
              count: "157 Products",
              image: "Image",
            },
            {
              name: "Desk Chair",
              count: "154 Products",
              image: "image2",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={`/${category.image}.png`}
                alt={category.name}
                width={424}
                height={424}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-[#000000] w-full h-[85px] bg-opacity-70 hover:bg-opacity-60 transition-opacity flex flex-col justify-end p-4 text-[#FFFFFF]">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Styles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center ml-12 mr-12">
          {/* Left Section with Vertical Text and Image */}
          <div className="relative flex items-center justify-center">
            {/* Vertical Text */}
            <p className="absolute transform -rotate-90 origin-bottom-left text-3xl sm:left-4 text-[#272343] font-semibold tracking-wide md:left-0 bottom-6">
              Explore New and Popular Styles
            </p>
            {/* Main Image */}
            <div className="w-full lg:w-[585px] flex justify-center items-center bg-gray-200">
              <Image
                src="/item-category 1.png"
                alt="Main Chair"
                width={644}
                height={644}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Section with Small Chair Grid */}
          <div className="grid grid-cols-2 gap-4">
            {["01", "02", "20", "20"].map((chair, index) => (
              <div
                key={index}
                className="relative hover:shadow-lg overflow-hidden"
              >
                <Image
                  src={`/${chair}.png`}
                  alt={`Chair ${index + 1}`}
                  width={284}
                  height={284}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#272343] mb-8">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ml-12 mr-16">
          {["product-1", "product-2", "product-3", "product-4"].map(
            (product, i) => (
              <div key={i} className="w-80">
                <div className="relative w-full h-[312px]">
                  <Image
                    src={`/${product}.png`}
                    alt={product}
                    width={312}
                    height={312}
                    className="object-cover w-[290px] h-[290px]"
                  />
                  {i === 1 && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded-tl-[2rem] rounded-br-[2rem]">
                      Sales
                    </span>
                  )}
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-green-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded-tl-[2rem] rounded-br-[2rem]">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-[#272343]">
                      Library Stool Chair
                    </h3>
                    <button className="w-13 mr-5 px-2 py-2 bg-[#F0F2F3] rounded-lg flex items-center justify-center">
                      <Image 
                                      src="/cart.png" 
                                      alt="shopping-cart" 
                                      width={24} 
                                      height={24} 
                                      className="transition-transform duration-500 ease-in-out transform hover:scale-105"/>
                    </button>
                  </div>
                  <p className="text-[#272343] font-bold mt-2">
                    $20{" "}
                    {i === 1 && (
                      <span className="text-[#9A9CAA] line-through text-sm ml-2">
                        $30
                      </span>
                    )}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ml-12 mr-16">
          {["prodct1", "prodct2", "prodct3", "product-1"].map((product, i) => (
            <div key={i} className="w-80">
              <div className="relative w-full h-[312px]">
                <Image
                  src={`/${product}.png`}
                  alt={product}
                  width={312}
                  height={312}
                  className="object-cover w-[290px] h-[290px]"
                />
                {i === 1 && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded-tl-[2rem] rounded-br-[2rem]">
                    Sales
                  </span>
                )}
                {i === 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-[#FFFFFF] text-xs font-bold px-2 py-1 rounded-tl-[2rem] rounded-br-[2rem]">
                    New
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-[#272343]">
                    Library Stool Chair
                  </h3>
                  <button className="w-13 mr-5 px-2 py-2 bg-[#F0F2F3] rounded-lg flex items-center justify-center">
                    <Image 
                                    src="/cart.png" 
                                    alt="shopping-cart" 
                                    width={24} 
                                    height={24} 
                                    className="transition-transform duration-500 ease-in-out transform hover:scale-105"/>
                  </button>
                </div>
                <p className="text-[#272343] font-bold mt-2">
                  $20{" "}
                  {i === 1 && (
                    <span className="text-[#9A9CAA] line-through text-sm ml-2">
                      $30
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;