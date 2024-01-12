import Greeting from './Greeting';
import CurrentTasks from './CurrentTasks';
import AddTaskPanel from './AddTaskPanel';
import DateComponent from './DateComponent';
import './DayRoute.css';

function DayRoute() {
    return (
        <div className="day-route">
            <Greeting/>
            <DateComponent/>
            <CurrentTasks/>
            <AddTaskPanel/>
        </div>
    )
}

export default DayRoute