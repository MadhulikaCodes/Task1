import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pt-20">
      <div className="container  mx-0 px-4 bg-black">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">intract.</h1>
            <p className="mt-2">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div className="flex flex-wrap justify-between md:w-auto gap-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-md font-bold">INTRACT</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Explore Quests
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Communities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Alpha Hub
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="text-md font-bold">EARN</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Refer & Earn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Leaderboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Achievements
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="text-md font-bold">ABOUT</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Product Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sign up Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Growth Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="text-md font-bold">SUPPORT</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Create your quest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            Disclaimer: Crypto Products, Virtual Digital Assets, and NFTs are
            unregulated and can be highly risky. There may be no regulatory
            recourse for any loss from such transactions. We advise the viewer
            to proceed with caution. Nothing in this website or any
            communication published by us amounts to, is intended to be, or
            should be construed as investment or purchase advice of any kind or
            financial advice or promotion under any applicable laws. Any
            decision made based on the content provided on this website or any
            communication published by us shall not be attributable to us.
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-400">CREATED BY INTRACT</p>
            <div className="flex space-x-4 gap-4 mx-12">
              <a href="#" className="text-blue-400 hover:text-white text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-green-600 hover:text-white text-2xl">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-white text-2xl">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
