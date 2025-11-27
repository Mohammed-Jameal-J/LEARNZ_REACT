import { useState } from "react";
import "./App.css";
import Button from "./Button";
import UserProfile from "./UserProfile";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <h2>Probs Example</h2>
      <UserProfile name="JAMEAL" age={22} />

      <h3>count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <Button hc={handleClick} />
      <Card>
        <h3>Im Mohammed Jameal</h3>
        <p>Frontend Developer</p>
        <button>View More</button>
      </Card>
      <Card>
        <h4>Title Goes Here</h4>
        <button>Click Me</button>
      </Card>
      
    </>
  );
}

export default App;
