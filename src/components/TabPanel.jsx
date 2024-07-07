import React from "react";
import backgroundImage from "./bg1.jpg"; // Ensure the path is correct

const TabPanel = () => {
  return (
    <div className="relative text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 inset-0 absolute"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Intract Academy
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
          Intract users have together made more than $100 million in web3. Join
          them and learn how to earn crypto!
        </p>
        <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg md:text-xl">
          Get Started →
        </button>
        <div className="mt-8 flex space-x-2 sm:space-x-4">
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg md:text-xl">
            Essentials
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg md:text-xl">
            Alpha Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabPanel;
