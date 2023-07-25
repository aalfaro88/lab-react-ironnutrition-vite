import React, { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleImageChange = e => {
    setImage(e.target.value);
  };

  const handleCaloriesChange = e => {
    setCalories(e.target.value);
  };

  const handleServingsChange = e => {
    setServings(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };
    onAddFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageChange}
        />

        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesChange}
        />

        <label>Servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsChange}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
