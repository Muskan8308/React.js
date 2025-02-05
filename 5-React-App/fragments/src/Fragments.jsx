function Fragments()
{
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
    return (
        <React.Fragment>
            <h2>Hello</h2>
            <h2>India</h2>
            <h2>Welcome</h2>
            <h2>India</h2>
        </React.Fragment>
    )
}

export default Fragments;