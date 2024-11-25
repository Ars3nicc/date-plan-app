import React, { useState } from "react";
import { Link } from "react-router-dom";

function Index() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const sendEmail = async (date) => {
    try {
      await fetch("https://your-email-api-endpoint.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "franzmanrique2121@gmail.com",
          subject: "Selected Date",
          text: `The selected date is: ${date}`,
        }),
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleButtonClick = () => {
    localStorage.setItem("selectedDate", selectedDate);
    sendEmail(selectedDate);
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
            className="text-red font-bold rounded-full hover:before:bg-redborder-rose-800 relative h-[50px] w-80 overflow-hidden border-1 border-rose-800 bg-white text-rose-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-rose-800 before:transition-all before:duration-500 hover:text-white hover:shadow-rose-800 hover:before:left-0 hover:before:w-full"
            onClick={handleButtonClick}
          >
            <span className="relative z-10">Set the Date! (＾-＾)</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;