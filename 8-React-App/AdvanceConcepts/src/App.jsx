import { useReducer, useState } from "react";
import Welcome from "./components/Welcome";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import TodoContextProvider, { TodoContext } from "./store/TodoStore";
import "./App.css";


function App() {
 
  return (
    <div>
      <TodoContextProvider>
        <center className="todo-container">
          <AppName />
          <Addtodo />
          <TodoItems></TodoItems>
          <Welcome></Welcome>
        </center>
      </TodoContextProvider>
    </div>
  );
}

export default App;
