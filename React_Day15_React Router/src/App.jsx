import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';


function App() {

  return (
    <>
      <h1>React Router</h1>
      <nav>
        <Link to='/'>Home</Link> | {" "}
        <Link to='/about'>About</Link> | {" "}
        <Link to='/user/1'>User 1</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/user/:id' element={<User />}/>
      </Routes>
    </>
  )
}

export default App
