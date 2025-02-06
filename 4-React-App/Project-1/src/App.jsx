import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
  {
    name : 'Buy Milk',
    dueDate : "4-10-2023"
  }, 
  {
    name : 'Dishes',
    dueDate : "4-10-2023"
  }
]

  return (
    <div>
      <center className ="todo-container">
        <AppName/>
        <Addtodo/>
        <TodoItems todoItems={todoItems}></TodoItems>
        
      </center>
    </div>
  );
}

export default App;
