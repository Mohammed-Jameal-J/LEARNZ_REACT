import { Routes , Route, Link } from "react-router-dom"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Login from "./pages/login.jsx"
import User from "./pages/User.jsx"

function App() {

  return (
    <>
    <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link>
    </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  )
}

export default App
