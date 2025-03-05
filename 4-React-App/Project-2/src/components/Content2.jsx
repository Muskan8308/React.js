import { useEffect, useState } from "react";

function Content2() 
{
    let [time, setTime] = useState(new Date());      {/* Date() is an object of js */}

    useEffect(() => {
        console.log("Interval started");
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup function

        return () => {
            clearInterval(intervalId);
            console.log("Interval cancelled");
        }
    }, [])

    return <p className="lead">
        This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()} AM
    </p> ;
}
export default Content2;