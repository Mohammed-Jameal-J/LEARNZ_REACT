import { lazy, Suspense } from "react";
const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/About"));
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Lazy Loading & Suspense</h1>
      {/* <Suspense fallback={<div>Loading HOME.</div>}>
       <Home />
     </Suspense>
      <Suspense fallback={<div>Loading ABOUT.</div>}>
       <About />
     </Suspense> */}
      <Suspense fallback={<span className="loader"></span>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
