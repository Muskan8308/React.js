import {useState} from 'react';
import style from './App.module.css';
import Display from "./components/Display"
import Buttons from "./components/Buttons"

function App() {

  const [calVal, setCalVal] = useState('');

  const BtnClick = function(btnText) {

    if(btnText === 'C')
    {
      setCalVal("");
    }
    else if(btnText === '=')
    {
      const res = eval(calVal);
      setCalVal(res);
    }
    else
    {
      const newDisplay = calVal + btnText;
      setCalVal(newDisplay);
    }
  }
 
  return (
    <div className = {style.calculator}>
      <Display displayVal = {calVal}/>
      <Buttons handleClickEvent = {BtnClick} />
      
    </div>
  )
}

export default App;