function ErrorMessage({items}) {

    return (
        <>
            {
                items.length === 0 && <h4>There is no item added.</h4> 
            }
        </>
    )
}

export default ErrorMessage;