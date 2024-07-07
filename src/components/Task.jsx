import React from 'react'
import bg2 from "./bg2.jpg";

const Task = () => {
      const progress = 0;
  return (
    <div className="bg-gray-900 p-3 rounded-lg flex gap-3 hover:bg-gray-800">
      <div
        className="w-[25%] h-13 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>
      <div>
        <p className=" text-white">Description of Course 1.</p>
        <p className="text-gray-500">
          -------------------------------------------------
        </p>
        <div className=" text-white flex justify-between items-center">
          <span className="text-sm">11 Tasks</span>
          <div className="w-full h-2 bg-gray-900 rounded-full ">
            <div
              className={`w-${progress}% h-full bg-gray-500 rounded-full p-2`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task
