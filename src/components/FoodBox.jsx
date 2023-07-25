import React from "react";

function FoodBox({ food, onDelete }) {
  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <div className="foodData">
      <p>{food.name}</p>

      <img src={food.image} alt={food.name} />

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FoodBox;
