import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
  console.log("Rendering FoodList...");

  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (foodToDelete) => {
    const updatedFoods = foods.filter((food) => food.id !== foodToDelete.id);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <div className="tableContainer">
        <div className="Table">
          {foods.map((food) => (
            <FoodBox key={food.name} food={food} onDelete={handleDeleteFood} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodList;
