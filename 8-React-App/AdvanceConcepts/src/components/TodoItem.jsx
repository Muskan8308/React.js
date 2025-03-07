import { useContext } from 'react';
import { TodoContext } from '../store/TodoStore';
import css from './TodoItem.module.css'
import {MdAutoDelete} from 'react-icons/md';

function TodoItem({todoName, todoDate})
{
    const {deleteItem} = useContext(TodoContext);

    return (
        <div className="container">
            <div className={`row ${css["kg-row"]}`}>
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button 
                    type="button" 
                    className={`btn btn-danger ${css["kg-button"]}`}
                    onClick = {() => deleteItem(todoName)}
                    ><MdAutoDelete/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
