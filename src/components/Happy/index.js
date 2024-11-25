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
        <button class="text-red font-bold rounded-full hover:before:bg-redborder-rose-800 relative h-[50px] w-80 overflow-hidden border-1 border-rose-800 bg-white text-rose-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-rose-800 before:transition-all before:duration-500 hover:text-white hover:shadow-rose-800 hover:before:left-0 hover:before:w-full">
          <span class="relative z-10">Continue darling  (づ ◕‿◕ )づ</span>
        </button>
      </Link>
    </div>
  );
}

export default Index;
