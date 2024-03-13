import { useState } from "react";
import "./Toggler.css";
export default function TogglerCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <p className="Toggler" onClick={toggleIsHappy}>
          {isHappy ? ":)" : ":("}
        </p>
        <h2>{count}</h2>
        <button onClick={incrementCount}>+</button>
    </div>
  );
}
