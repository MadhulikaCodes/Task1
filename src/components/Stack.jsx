import React from 'react'
import bg2 from "./bg2.jpg";
import Task from './Task';

const Stack = ({down,margin,width}) => {
  
  return (
    <div
      className={`grid grid-cols-1  lg:pl-16 ${margin} ${width} ${down} w-full p-3`}
    >
      <div className="bg-gray-900 text-white  py-5 rounded-lg shadow-lg w-full lg:w-[50%] ">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-800 flex items-center justify-center rounded-full">
            <img
              src="path_to_your_image.png"
              alt="Crypto"
              className="w-12 h-12"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">Basics of Crypto</h2>
            <p className="text-gray-400">
              The safest and easiest place to start your crypto journey!
            </p>
            <p className="text-lg font-semibold mt-2">6 Quests</p>
            <div className="flex items-center mt-2 bg-gray-800 px-2 py-1 rounded-lg">
              <svg
                className="w-5 h-5 text-yellow-400 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.067 3.283a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.067 3.283c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.067-3.283a1 1 0 00-.364-1.118L2.049 8.71c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.067-3.283z" />
              </svg>
              <span>1490 XPs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full lg:w-[50%] h-96 gap-1 px-8 overflow-auto bg-black p-3">
        {[1, 2, 3, 4, 5].map((i) => {
          return <Task key={i} />;
        })}
      </div>
    </div>
  );
}

export default Stack