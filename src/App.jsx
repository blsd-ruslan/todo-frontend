import './App.css'
import Greeting from './mainComponents/Greeting'
import MainSidebar from './mainComponents/MainSidebar'

function App() {
  return (
    <div className='page-container'>
      <MainSidebar/>
      <Greeting/>
    </div>
  )
}

export default App
