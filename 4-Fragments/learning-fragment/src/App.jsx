// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./components/FoodItem";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Meat", "Milk", "Fruits", "Vegetables", "Beans", "Lentils"];
  return (
    <>
      <Container>
        <h1 className="food_heading">
          <u>Healthy Foods:</u>
        </h1>
        <FoodItem itm={foodItems}></FoodItem>
        <ErrorMsg itm={foodItems}></ErrorMsg>
      </Container>
      <Container>
        <p>Above is the list of healthy foods that are good for your health.</p>
      </Container>
    </>
  );
}

export default App;
