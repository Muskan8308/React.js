
import Item from "./Item";

function FoodItems({items}) {
    // Conditional Rendering - 1. if-else  2. ternary operators  3. Logical operators
        
    // let foodItem = [];
    // let foodItem = ["Dal","Eggs","Paneer","Soya Beans","Green Leafy veggies","Roti","Salad"];

    const buttonClicked = (event) => {
        console.log(event);
        console.log(`${items} being bought`)
    }


    return (
        <>
            {
                // Ternary operators
                // foodItem.length === 0 ? <h4>There is no item added.</h4> : null
                
                // Logical operators
                // foodItem.length === 0 && <h4>There is no item added.</h4> 
                // Here if first condition is true then it will return the 2nd condition.
            }
 
            <h1 className = "heading">Healthy Foods</h1>
            <ul className="list-group list-group-flush">
            {
                items.map((item) => (
                    <Item key = {item} food_items = {item} buttonClicked = {buttonClicked}/>    // Passing function via props
                ))
            }
                
            </ul>
        </>
    )
}

export default FoodItems;
