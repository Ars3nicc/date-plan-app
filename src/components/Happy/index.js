import React, { useEffect } from "react";
import HappyCatGIF from "../assets/img/happy-cat.gif";
import confetti from "canvas-confetti";
import { Link } from "react-router-dom";
function Index() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 150,
      origin: { y: 0.6 },
      shapes: ["heart"],
      colors: ["#ff69b4", "#ff1493", "#ff00ff", "#ff6347", "#ff4500"],
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      <div className="flex justify-center items-center">
        <img
          src={HappyCatGIF}
          alt="Happy Cat"
          className="h-[280px] object-contain pb-8"
        />
      </div>
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-rose-800">Yayyyy!</h1>
        <p className="italic py-4 text-lg text-rose-800">
          Don't go anywhere :)
        </p>
      </header>
      <Link to="/select-date">
        <button className="bg-rose-800 text-white py-3 px-16 rounded-full flex items-center hover:bg-rose-700">
          Continue
          <i className="bx bx-right-arrow-alt text-lg ml-3"></i>
        </button>
      </Link>
    </div>
  );
}

export default Index;
