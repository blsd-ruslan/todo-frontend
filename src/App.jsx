import './App.css'
import MainSidebar from './mainComponents/MainSidebar'
import AllTasks from './mainComponents/AllTasks'
import DayRoute from './mainComponents/DayRoute'

function App() {
  return (
    <div className='page-container'>
      <MainSidebar/>
      <DayRoute/>
      <AllTasks/>
    </div>
  )
}

export default App
