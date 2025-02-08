import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container"
import FoodInput from "./components/FoodInput";
import './App.css';

function App() {

  // let foodItem = [];
  let foodItem = ["Dal","Eggs","Paneer","Soya Beans","Green Leafy veggies","Roti","Salad"];
  
  // Passing this function via props
  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <Container>
        <FoodItems items = {foodItem}/>
        <FoodInput handleOnChange={handleOnChange} ></FoodInput>
        <ErrorMessage items = {foodItem}/>
      </Container>
      <Container>
        <p>Above is the list of the healthy foods</p>
      </Container>
    </>
  );
}

export default App;