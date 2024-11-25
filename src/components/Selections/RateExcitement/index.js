import React, { useState } from "react";
import { Link } from "react-router-dom";
function Index() {
  const [excitement, setExcitement] = useState(5);

  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen relative">
      <img
        src="https://i.chzbgr.com/full/9442666752/hEE1C0E84/cat"
        alt="excited cat"
        className="w-[250px]"
      />
      <h2 className="text-5xl font-extrabold mb-8 text-rose-800">
        Rate your excitement
      </h2>

      <span className="text-lg mb-2">
        Excitement Level: <b className="text-rose-800 text-xl">{excitement}</b>
      </span>

      <input
        type="range"
        min="1"
        max="10"
        value={excitement}
        onChange={(e) => setExcitement(e.target.value)}
        className="w-full max-w-md h-2 bg-rose-800 rounded-lg appearance-none cursor-pointer mb-4"
        style={{ WebkitAppearance: "none", appearance: "none" }}
      />

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #4a5568;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #4a5568;
          cursor: pointer;
        }
      `}</style>

      <div className="flex justify-between w-full max-w-md">
        <span className="text-xl font-bold text-rose-800">1</span>
        <span className="text-xl font-bold text-rose-800">10</span>
      </div>

      <div className="py-9">
        <Link to="/post-message">
          <button
            className="text-red font-bold rounded-full hover:before:bg-redborder-rose-800 relative h-[50px] w-80 overflow-hidden border-1 border-rose-800 bg-white text-rose-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-rose-800 before:transition-all before:duration-500 hover:text-white hover:shadow-rose-800 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Let's Wrap it Up! (＾-＾)</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
