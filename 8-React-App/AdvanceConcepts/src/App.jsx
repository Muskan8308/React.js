import { useState } from "react";
import Welcome from "./components/Welcome";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import { TodoContext } from "./store/TodoStore";
import "./App.css";

function App() {
 
  
const [todoItems, setTodoItems] = useState([])

const addNewItem = (itemName, itemDate) => {

  setTodoItems((currValue) => {
      const newTodoItems = [...currValue,{
      name : itemName,
      dueDate : itemDate
    }]
    return newTodoItems;
})

}

// To delete items
  const deleteItem = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoName)
    setTodoItems(newTodoItems);

  }


  return (
    <div>
      {/* Accessing Context API */}
      <TodoContext.Provider value = {{
          todoItems : todoItems,
          addNewItem : addNewItem,
          deleteItem : deleteItem
        }}>      
        <center className ="todo-container">
          <AppName/>
          <Addtodo/>
          <TodoItems></TodoItems>
          <Welcome ></Welcome>
        </center>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
