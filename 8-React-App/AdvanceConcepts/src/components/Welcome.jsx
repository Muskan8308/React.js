import { useContext } from "react";
import { TodoContext } from "../store/TodoStore";
import css from "./Welcome.module.css";

function Welcome() {

    const Todo_Items = useContext(TodoContext);
    const todoItems = Todo_Items.todoItems;

    return (todoItems.length === 0 && <p>Enjoy your day!!</p>);
}

export default Welcome;