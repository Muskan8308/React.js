import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  /*
    • This "div" provides an extra layer and combines all elements in a single element or component that's why it is used to wrap with the return statement.
      
      return <div>
        fragments
      </div>
    
    • Disadvantage of using div - It adds an extra DOM nodes.

    To avoid this unneccesary div, we use fragments 
    syntax 1 : <React.Fragment>....</React.Fragment>
    syntax 2 : <>...</>
  */

    let foodItem = ["Dal","Eggs","Paneer","Soya Beans","Green Leafy veggies","Roti","Salad"];

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ul className="list-group list-group-flush">
        {
          foodItem.map((item) => (
            <li key = {item} className="list-group-item">{item}</li>
          ))
        }
        
      </ul>
    </React.Fragment>
  );
  

}

export default App;