import { useState, useRef } from 'react';
import { BiAlarmAdd } from "react-icons/bi";
import css from './Addtodo.module.css';

function Addtodo({onNewItem})
{
  /*
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  }

  const handleChangeDate = (event) => {
    setTodoDate(event.target.value);
  }
*/

// Instead of useState, using useRef hook
  const todoEle = useRef();
  const dateEle = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoEle.current.value;     // To access the current value of the element
    const todoDate = dateEle.current.value;
    todoEle.current.value = "";
    dateEle.current.value = "";
    onNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  }

  return (
      <div className="container">
        <form className="row kg-row" onSubmit = {handleAddButtonClicked}>
          <div className="col-6">
            <input 
            type="text" 
            // value = {todoName}
            ref = {todoEle}
            placeholder= "Enter your todo"
            // onChange = {handleChangeName}
            ></input>
          </div>
          <div className="col-4">
            <input 
            type="date" 
            // value = {todoDate}
            ref = {dateEle}
            // onChange = {handleChangeDate}
            ></input>
          </div>
          <div className="col-2">
            <button 
            type="submit" 
            className= {`btn btn-success ${css["kgButton"]}`}
            ><BiAlarmAdd/>
            </button>
          </div>
        </form>
      </div>
  )
}

export default Addtodo;
