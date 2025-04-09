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

    let text = "Hii I am a living being and just living the life"

    // Basic way to use useState :-
    // let textState = useState(text);     // This will return an array
    // let textVal = textState[0];         // 1st value of array -> current state
    // let setTextMethod = textState[1];   // 2nd value of array -> method to modify

    // Optimal or 2nd way to use useState :-
    // let [textVal, setTextVal] = useState(text);
    // console.log(`Current value -> ${textVal}`)

    let [items, setItems] = useState([
        "Socks", "Shoes", "Boots"
    ]);

    const onKeyDown = (event)=> {
        if(event.key === 'Enter')
        {
            let newItem = event.target.value;       // Getting the input's value
            event.target.value = '';                // Making input empty after pressing enter
            let newArray = [...items, newItem];     // Adding more items to the array
            setItems(newArray);
        }
    }

    const onClickEvent = (event) => {
        console.log(event);
    }

    return <>
        <InputText handleKeyDown = {onKeyDown} /* handleOnChange = {handleOnChange} */ />
        {/* <h4>{textVal}</h4> */}
        <DisplayItems items ={items} handleClick = {onClickEvent}></DisplayItems>
    </>
}

export default App;
