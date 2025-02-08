import style from "./InputText.module.css"

function InputText({handleOnChange}) {
    return <input
        className= {style.input}    
        type = "text" 
        placeholder = "Enter your Name"
        onChange = {handleOnChange} 
        ></input>
    
}

export default InputText;