import { useEffect, useState } from "react";

function Currenttime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [])

    return <p>This is the current time: <b>{time.toLocaleDateString()}</b>&nbsp;-&nbsp;<b>{time.toLocaleTimeString()}</b></p>
}

export default Currenttime;