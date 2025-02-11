import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
 
const initialTodos = [
  {
    name : 'Buy Milk',
    dueDate : "4-10-2023"
  }, 
  {
    name : 'Dishes',
    dueDate : "4-10-2023"
  }
]
  
const [todoItems, setTodoItems] = useState(initialTodos)

const handleNewItems = (itemName, itemDate) => {
  console.log(`New item is ${itemName}, ${itemDate}`);
}

  return (
    <div>
      <center className ="todo-container">
        <AppName/>
        <Addtodo onNewItem = {handleNewItems} />
        <TodoItems todoItems={todoItems}></TodoItems>
        
      </center>
    </div>
  );
}

export default App;
