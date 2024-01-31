import { useState } from "react";
import { useEffect } from "react";
import "./style.css"
const DateClock = () => {
    const getCurrentDateTime = () => {
        const currentDate = new Date();
        return {
            date: currentDate.toLocaleDateString('pl', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }),
            time: currentDate.toLocaleTimeString('pl', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false,
            }),
        };
    };

    const [dateTime, setDateTime] = useState(getCurrentDateTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(getCurrentDateTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='form__dateTime'>
            <p>Dzisiaj jest {dateTime.date}, {dateTime.time}</p>
        </div>
    );
};

export default DateClock;




