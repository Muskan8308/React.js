// Importing css module file

import style from "./Item.module.css";      // style is an object which helps to access the properties like className and so on.


let Item = ({food_items, buttonClicked}) => {

    // Handling Events 

    
    return (
        <li className={`${style['kg-item']} list-group-item`}>
            {food_items}
            <button className = {`${style.button} btn btn-outline-light`}
                // onClick = {() => console.log(`${props.food_items} being bought`)}
                onClick = {buttonClicked}   // passing reference of the function
            > Buy </button>    
        </li>
    )
    
}

export default Item;
