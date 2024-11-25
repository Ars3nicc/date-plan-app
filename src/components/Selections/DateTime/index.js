import React, { useState } from "react";
import { Link } from "react-router-dom";

function Index() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleButtonClick = () => {
    localStorage.setItem("selectedDate", selectedDate);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      <header className="text-center mb-8">
        <h1 className="font-extrabold text-5xl text-rose-800 ">
          When are you free?
        </h1>
        <p className="py-2 text-rose-800">You can select your preferred date!</p>
      </header>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="px-4 py-6 border border-rose-800 rounded"
        required
      />
      <div className="py-9">
        <Link to="/select-food">
          <button
            className="bg-rose-800 text-white py-3 px-16 rounded-full flex items-center hover:bg-rose-700"
            onClick={handleButtonClick}
          >
            Set the Date!
            <i className="bx bx-right-arrow-alt text-lg ml-3"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;