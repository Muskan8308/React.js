import styles from "./FoodInput.module.css";


function FoodInput({handleOnChange}) {

// Passing function via props



// Handling Events  - onChange

    // const handleOnChange = (event) => {
    //     console.log(event.target.value);
    // }

    return <input 
        className ={styles.input} 
        type = "text" 
        placeholder = "Enter your custom vegies"
        // onChange = {(event) => console.log(event.target.value)}
        onChange = {handleOnChange}
    
    />
}

export default FoodInput;
