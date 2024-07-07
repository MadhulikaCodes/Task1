import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const value =
    location.pathname === "/" ? 0 : location.pathname === "/advanced" ? 1 : 0;

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-8">intract.</h1>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Compass
            </Link>
            <Link to="/explore" className="hover:text-gray-400">
              Explore
            </Link>
            <Link
              to="/academy"
              className="flex items-center hover:text-gray-400"
            >
              Academy
              <span className="bg-purple-600 text-xs text-white ml-1 px-2 py-0.5 rounded-full">
                New
              </span>
            </Link>
            <Link to="/nfts" className="hover:text-gray-400">
              NFTs
            </Link>
            <Link to="/projects" className="hover:text-gray-400">
              For Projects
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for ecosystems, trending quests etc.,"
              className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-full focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l4.39 4.38-1.42 1.42-4.39-4.38zm-7.4-6.9a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="bg-transparent border border-white rounded-full p-2">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
