import Greeting from './Greeting'
import Date from './DateComponent'
import CurrentTasks from './CurrentTasks'
import AddTaskPanel from './AddTaskPanel'
import DateComponent from './DateComponent'

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