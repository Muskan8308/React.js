import TodoItem from "./TodoItem";
import css from './TodoItems.module.css';

function TodoItems({todoItems, onDeleteClick}) 
{
    return <>
        <div className = {css["items-container"]}>   {/* convention to use className instead of class */}
            {
                todoItems.map(item => <TodoItem todoName = {item.name} todoDate ={item.dueDate} onDeleteClick={onDeleteClick} ></TodoItem>
                )
            }
        </div>    
    </>

}

export default TodoItems;