import style from './DisplayItems.module.css'

function DisplayItems({items, handleClick}) {
    return ( 
    <>
        <ul>
        {
            items.map((item, index) => (
                <li key = {index} onClick = {handleClick} >{item}</li>))
        }
        </ul>
    </>
    );
}

export default DisplayItems;