import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItem1 from "./components/todoItem1";
import TodoItem2 from "./components/todoItem2";
import "./App.css";

function App() {
  return (
    <div>
      <center className ="todo-container">
        <AppName/>
        <Addtodo/>
        <div className = "items-container">   {/* convention to use className instead of class */}
          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
        </div>
      </center>
    </div>
  );
}

export default App;
