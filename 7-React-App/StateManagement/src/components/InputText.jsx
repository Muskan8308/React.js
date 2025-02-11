import style from "./InputText.module.css"

function InputText({handleKeyDown}) {
    return (
    <>
        <input
        className= {style.input}    
        type = "text" 
        placeholder = "Enter your Name"
        onKeyDown = {handleKeyDown} 
        ></input>
        <button type="button" className="btn btn-secondary">Add</button>
    </>
    )
}

export default InputText;