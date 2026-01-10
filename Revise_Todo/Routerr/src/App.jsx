import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Login from "./pages/login.jsx";
import User from "./pages/User.jsx";
import UserLayout from "./layout/UserLayout.jsx";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
