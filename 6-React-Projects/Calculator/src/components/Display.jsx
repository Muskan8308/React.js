import style from './Display.module.css';

const Display = ({displayVal}) => {
    return <input placeholder="0" id= {style.display} type= "text" value = {displayVal} readOnly></input>
}

export default Display;