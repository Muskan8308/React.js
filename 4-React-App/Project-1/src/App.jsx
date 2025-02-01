import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItem1 from "./components/todoItem1";
import TodoItem2 from "./components/todoItem2";

function App() {
  return (
    <div>
      <center class="todo-container">
        <AppName/>
        <Addtodo/>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </center>
    </div>
  );
}

export default App;
