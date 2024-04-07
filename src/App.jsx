import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

import { useState } from "react";

function App() {
  const [foodList, setFoodList] = useState(foodsJson);

  const deleteFood = (food) => {
    setFoodList([...foodList.filter((f) => f.id !== food.id)])
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodBox foodList={ foodList } deleteFood={ deleteFood } />
    </div>
  );
}

export default App;
