import InputText from "./components/InputText"
import DisplayItems from "./components/DisplayItems";
import "./App.css"
import { useState } from "react"

/*
 Using useState to re-render the component to show the updation occured in the component.
    This "useState" returns an array with two elements.
    1st value -> current state
    2nd value -> function by which we can modify it. 
*/

function App() {

    function handleOnChange(event){
        console.log(event.target.value);
        setTextVal(event.target.value);
    }

    let text = "Hii I am a human being"

    // Basic way to use useState :-
    // let textState = useState(text);     // This will return an array
    // let textVal = textState[0];         // 1st value of array -> current state
    // let setTextMethod = textState[1];   // 2nd value of array -> method to modify

    // Optimal or 2nd way to use useState :-
    let [textVal, setTextVal] = useState(text);
    console.log(`Current value -> ${textVal}`)

    let [items, setItems] = useState([
        "Socks", "Shoes", "Boots"
    ]);

    const onKeyDown = (event)=> {
        if(event.key == 'Enter')
        {
            let newItem = event.target.value;
            setItems(newItem);
        }
    }

    return <>
        <InputText handleOnChange = {handleOnChange}/>
        <h4>{textVal}</h4>
        <DisplayItems items ={items} handleKeyDown = {onKeyDown}></DisplayItems>
    </>
}

export default App;