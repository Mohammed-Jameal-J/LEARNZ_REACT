import './App.css'
import Count from './Count'
import Cssfile from './Cssfile'
import Dashboard from './Dashboard'
import EventComponent from './EventComponent'
import InlineStyleComponents from './InlineStyleComponents'
import TailwindComponenets from './TailwindComponenets'
import Three from './Three'


function App() {

  return (
    <>
     <h1>Conditional Rendering</h1>
     <Dashboard />
     <EventComponent />
     <InlineStyleComponents />
     <Cssfile />
     <Three />
     <TailwindComponenets />
     <Count />
    </>
  )
}

export default App
