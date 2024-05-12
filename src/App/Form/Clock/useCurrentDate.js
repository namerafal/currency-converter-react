import { useState, useEffect } from "react";

export const useCurrentDate = () => {
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


    const formattedDate = dateTime.toLocaleDateString('pl', dateOptions);

    const formattedTime = dateTime.toLocaleTimeString('pl', timeOptions);

    return { date: formattedDate, time: formattedTime};
};