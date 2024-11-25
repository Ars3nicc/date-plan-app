import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

const FoodSelection = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const location = useLocation();
  const previousData = location.state?.previousData || {};

  const handleSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen relative">
      <h2 className="text-5xl font-extrabold mb-8 text-rose-800">
        What do you want to eat?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food.name}
            className={`food-item cursor-pointer p-4 border rounded-lg transition-transform transform hover:scale-105 ${
              selectedFood === food.name ? "bg-rose-200" : "bg-white"
            }`}
            onClick={() => handleSelect(food.name)}
          >
            <img
              src={food.img}
              alt={food.name}
              className="h-[250px] w-[250px] object-cover rounded-full mx-auto"
            />
            <p className="mt-2 text-2xl text-rose-800 text-center font-bold">{food.name}</p>
          </div>
        ))}
      </div>
      <div className="py-11">
        <Link
          to={{
            pathname: "/select-date-type",
            state: { ...previousData, selectedFood },
          }}
        >
          <button className="text-red font-bold rounded-full hover:before:bg-redborder-rose-800 relative h-[50px] w-80 overflow-hidden border-1 border-rose-800 bg-white text-rose-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-rose-800 before:transition-all before:duration-500 hover:text-white hover:shadow-rose-800 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">Got it! :)</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodSelection;
