
import React from "react";
import bg2 from "./bg2.jpg"; // Import the image directly
import bg6 from "./bg6.png"; // Import the image directly
const creators = [
  {
    id: 1,
    image: bg2, // Use the imported image
    title: "How to plan your retirement with crypto?",
    category: "",
  },
  {
    id: 2,
    image: bg2, // Use the imported image
    title: "Why are there limited",
    category: "Essentials",
  },
  {
    id: 3,
    image: bg2, // Use the imported image
    title: "How does Uniswap",
    category: "Alpha Hub",
  },
  {
    id: 4,
    image: bg2, // Use the imported image
    title: "How to spot crypto",
    category: "",
  },
];

const TabPanel2 = () => {
  return (
    <div className="bg-black text-white p-6 ">
      <div className="border-b border-gray-700 m-10"></div>
      <h1 className="text-3xl font-bold mb-2 text-center">
        Top Crypto Creators and Projects to Follow
      </h1>
      <p className="text-gray-400 mb-6 text-center">
        Answers to your crypto doubts, straight from the experts
      </p>
      <div className="flex justify-center gap-4 h-[25rem]">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="relative bg-gray-800 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 group"
          >
            <img
              src={creator.image}
              alt={creator.title}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            {creator.category && (
              <span className="absolute top-2 left-2 bg-gray-900 bg-opacity-70 text-white text-sm px-2 py-1 rounded-full">
                {creator.category}
              </span>
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{creator.title}</h2>
            </div>
            <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 text-white text-sm p-1 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 4a3 3 0 00-6 0v12a3 3 0 006 0V4zm6-3a3 3 0 00-3 3v12a3 3 0 006 0V4a3 3 0 00-3-3z" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l8 6-8 6V4z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-gray-700 m-10"></div>
      <div>
        <h1 className="text-3xl font-bold m-2 text-center">
          Crypto Dictionary
        </h1>
        <p className="text-gray-400 mb-6 text-center">
          Your one-stop to catch up on all crypto terms
        </p>
        <div
          className=" relative bg-cover bg-center w-full h-[30rem] rounded-lg"
          style={{ backgroundImage: `url(${bg6})` }}
        >
          <div className="absolute bottom-0 p-5">
            <h3 className="text-xl font-bold mb-2 text-center">
              Web3 + Degen Glossary
            </h3>
            <p className="text-gray-400 mb-6 text-center">
              Your own crypto dictioary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPanel2;

