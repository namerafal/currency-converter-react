import { useState, useEffect } from "react";
import "./style.css"
const DateClock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const dateOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };


    const date = {
        formatted: dateTime.toLocaleDateString('pl', dateOptions)
    };

    const time = {
        formatted: dateTime.toLocaleTimeString('pl', timeOptions)
    };

    return (
        <div className='form__dateTime'>
            <p>Dzisiaj jest {date.formatted}, {time.formatted}</p>
        </div>
    );
};

export default DateClock;




