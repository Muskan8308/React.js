import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container"
import './App.css';

function App() {

  // let foodItem = [];
  let foodItem = ["Dal","Eggs","Paneer","Soya Beans","Green Leafy veggies","Roti","Salad"];
  
  return (
    <>
      <Container>
        <FoodItems items = {foodItem}/>
        <ErrorMessage items = {foodItem}/>
      </Container>
      <Container>
        <p>Above is the list of the healthy foods</p>
      </Container>
    </>
  );
}

export default App;