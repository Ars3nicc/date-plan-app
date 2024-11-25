import React, { useState } from "react";
import hamsterIMG from "../assets/img/hamster-meme.jpg"; // Adjust the path and filename as needed
import { Link } from "react-router-dom";
function HomePage() {
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setNoButtonStyle({
      position: "absolute",
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen relative">
      <div className="flex justify-center items-center">
        <img src={hamsterIMG} alt="Hamster Meme" className="w-[250px] pb-8" />
      </div>
      {/* <h1 className="text-center text-5xl font-extrabold text-rose-800">
        Will you go out on a date with me?
      </h1> */}
      <div className="py-16">
        <Link to="/happy-page">
          <button className="bg-rose-800 text-white px-16 py-4 rounded mr-4 transition duration-300 ease-in-out transform hover:bg-rose-600 hover:scale-105">
            Yes
          </button>
        </Link>
        <button
          className="bg-gray-400 text-white px-8 py-4 rounded"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
    </main>
  );
}

export default HomePage;
