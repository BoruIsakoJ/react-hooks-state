import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  const [number,setIncrementByTwo] = useState(0)
  function incrementByTwo(){
    setIncrementByTwo(number + 2)
  }

  return (
    <>  
      <div>
      <button onClick={increment}>I have been clicked {count} times</button>

      </div>
      <div style={{marginTop: "10px"}}>
      Click to increment by 2: <button onClick={incrementByTwo}> {number}</button>
        
      </div>
    </>)
}

export default Counter;
