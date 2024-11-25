import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function FoodSelection() {
  const location = useLocation();
  const { date } = location.state || {}; // Get the date from the previous page
  const [selectedFood, setSelectedFood] = useState(null);

  const foods = [
    {
      name: "Burger and Fries",
      img: "https://i.redd.it/cheese-burger-and-fries-homemade-v0-o1b8erli2vib1.jpg?width=3000&format=pjpg&auto=webp&s=d6e56f93416713521dcfa6296fe9370212eefe89",
    },
    {
      name: "Pizza",
      img: "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg",
    },
    {
      name: "Pasta",
      img: "https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg",
    },
    {
      name: "Steak",
      img: "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg",
    },
    {
      name: "Barbecue",
      img: "https://yummykitchentv.com/wp-content/uploads/2022/03/pork-barbecue-yummy-kitchen.jpg",
    },
  ];

  const handleSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen relative">
      <h2 className="text-5xl font-extrabold mb-8 text-rose-800">
        What do you want to eat?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center gap-8">
        {foods.map((food, index) => (
          <label
            key={index}
            className={` rounded-lg p-4 transform transition duration-300 cursor-pointer ${
              selectedFood === food
                ? "scale-110 ring-4 ring-rose-500"
                : "hover:scale-105"
            }`}
          >
            <input
              type="radio"
              name="food"
              value={food.name}
              checked={selectedFood === food}
              onChange={() => handleSelect(food)}
              className="hidden"
            />
            <img
              src={food.img}
              alt={food.name}
              className="h-[250px] w-[250px] object-cover rounded-full mx-auto"
            />
            <span className="block mt-4 text-2xl text-rose-800 font-bold">
              {food.name}
            </span>
          </label>
        ))}
      </div>
      <div className="py-9">
        <Link
          to={{
            pathname: "/select-food",
            state: { date, selectedFood },
          }}
        >
          <button
            className="bg-rose-800 text-white py-3 px-16 rounded-full flex items-center hover:bg-rose-700"
          >
            Got it :)
            <i className="bx bx-right-arrow-alt text-lg ml-3"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FoodSelection;
