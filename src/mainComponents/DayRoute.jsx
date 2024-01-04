import Greeting from './Greeting'
import Date from './Date'
import CurrentTasks from './CurrentTasks'
import AddTaskPanel from './AddTaskPanel'

function DayRoute() {
    return (
        <div className="day-route">
            <Greeting/>
            <Date/>
            <CurrentTasks/>
            <AddTaskPanel/>
        </div>
    )
}

export default DayRoute