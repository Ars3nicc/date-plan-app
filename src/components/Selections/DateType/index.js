import React, { useState } from "react";
import { Link } from "react-router-dom";

const DateTypeSelection = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelection = (type) => {
    setSelectedType(type);
    // Store the selected type together with the date and food selection
    // This can be done by updating a global state or passing the selected type to a parent component
  };

  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen relative">
      <div className="">
        <h2 className="text-5xl font-extrabold mb-8 text-rose-800">
          What type of date do you want?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {["Chill and Calming", "Fun and Crazy", "Healthy and Relaxing"].map(
            (type) => (
              <li
                key={type}
                className={`py-4 px-6 text-center font-bold text-white rounded cursor-pointer ${
                  selectedType === type ? "bg-rose-700" : "bg-rose-400"
                } hover:bg-rose-700`}
                onClick={() => handleSelection(type)}
              >
                {type}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="py-16">
        <Link to="/rate-excitement">
          <button
            className="bg-rose-800 text-white py-3 px-16 rounded-full flex items-center hover:bg-rose-700"
          >
            I gotchu babe!
            <i className="bx bx-right-arrow-alt text-lg ml-3"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DateTypeSelection;
// ...existing code...
