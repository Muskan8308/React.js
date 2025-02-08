function DisplayItems({items, onKeyDown}) {
    return ( 
    <>
        <ul onKeyDown = {onKeyDown}>
        {
            items.map((item, index) => (
                <li key = {index} >{item}</li>))
        }
        </ul>
    </>
    );
}

export default DisplayItems;