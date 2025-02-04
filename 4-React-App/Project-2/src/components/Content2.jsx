function Content2() 
{
    let time = new Date();      {/* Date() is an object of js */}

    return <p className="lead">
        This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} AM
    </p> ;
}
export default Content2;