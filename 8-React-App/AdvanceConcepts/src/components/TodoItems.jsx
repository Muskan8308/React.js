import { useContext } from "react";
import { TodoContext } from "../store/TodoStore";
import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

function TodoItems() {
  const Todo_Items = useContext(TodoContext);
  const todoItems = Todo_Items.todoItems;
  // const {deleteItem} = useContext(TodoContext);   // We can do Destructing of above two lines like this
  return (
    <>
      <div className={css["items-container"]}>
        {" "}
        {/* convention to use className instead of class */}
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={todoItems}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
