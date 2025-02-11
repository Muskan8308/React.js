import { useState } from 'react';
import css from './Addtodo.module.css';

function Addtodo({onNewItem})
{
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  }

  const handleChangeDate = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input 
            type="text" 
            value = {todoName}
            placeholder= "Enter your todo"
            onChange = {handleChangeName}
            ></input>
          </div>
          <div className="col-4">
            <input 
            type="date" 
            value = {todoDate}
            placeholder= "Enter your todo"
            onChange = {handleChangeDate}
            ></input>
          </div>
          <div className="col-2">
            <button 
            type="button" 
            className= {`btn btn-success ${css["kgButton"]}`}
            onClick = {handleAddButtonClicked}
            >Add</button>
          </div>
        </div>
      </div>
  )
}

export default Addtodo;
