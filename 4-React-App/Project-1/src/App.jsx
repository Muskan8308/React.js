import { useState } from "react";
import Welcome from "./components/Welcome";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
 
/*
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
*/
  
const [todoItems, setTodoItems] = useState([])

const handleNewItems = (itemName, itemDate) => {
/*
// Updation of state from previous state using -> Spread operator 
  
  let newTodoItem = [...todoItems, {
    name : itemName,
    dueDate : itemDate
  }]
  setTodoItems(newTodoItem);

*/

// 2nd way 
// Updation of state from previous state -> Functional updates

  setTodoItems((currValue) => {
      const newTodoItems = [...currValue,{
      name : itemName,
      dueDate : itemDate
    }]
    return newTodoItems;
})

  

}

// To delete items
  const handleDeleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoName)
    setTodoItems(newTodoItems);

  }


  return (
    <div>
      <center className ="todo-container">
        <AppName/>
        <Addtodo onNewItem = {handleNewItems} />
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItems>
        {todoItems.length === 0 && <Welcome></Welcome>}
      </center>
    </div>
  );
}

export default App;
