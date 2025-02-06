// Importing css module file

import style from "./Item.module.css";      // style is an object which helps to access the properties like className and so on.


let Item = (props) => {
    return (
        <li className={`${style['kg-item']} list-group-item`}>{props.food_items}</li>
    )
    
}

export default Item;
