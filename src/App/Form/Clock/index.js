import { useCurrentDate } from "./useCurrentDate";
import { DateTime } from "./styled.js";

const Clock = () => {

    const { date, time } = useCurrentDate();

    return (
        <DateTime>
            <p>Dzisiaj jest {date}, {time}</p>
        </DateTime>
    );
};

export default Clock;




