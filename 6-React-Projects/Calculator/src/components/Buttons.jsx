import style from './Buttons.module.css'

const Buttons = ({handleClickEvent}) =>  {

    const btn = ['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']

    return <div className = {style["btns-container"]}>
        {btn.map(btnName => <button 
        className = {style.btns} 
        onClick = {() => {
            handleClickEvent(btnName)
        }} 
        >{btnName}</button>)}  </div>
}

export default Buttons;