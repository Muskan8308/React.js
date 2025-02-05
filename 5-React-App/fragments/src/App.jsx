import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let foodItem = [];
  let foodItem = ["Dal","Eggs","Paneer","Soya Beans","Green Leafy veggies","Roti","Salad"];
  
  return (
    <>
      <FoodItems items = {foodItem}/>
      <ErrorMessage items = {foodItem}/>
    </>
  );
}

export default App;