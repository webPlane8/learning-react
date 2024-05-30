// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItem";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";

function App() {
  let foodItems = ["Meat", "Milk", "Fruits", "Vegetables", "Beans", "Lentils"];
  return (
    <>
      <h1 className="food_heading">Healthy Foods</h1>
      <FoodItem itm={foodItems}></FoodItem>
      <ErrorMsg itm={foodItems}></ErrorMsg>
    </>
  );
}

export default App;
