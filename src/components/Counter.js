import { useState } from "react";

const Counter = (props) => {
 
    console.log("Counter props: ", props);

  const [counter, setCounter] = useState(29384732982747)

  const addAction = (e) => {
    setCounter(counter + 150);
  };

  const decreaseAction = (e) => {
    setCounter(counter - 1);
  };

  const resetAction = (e) => {
    setCounter(0);
  };

  console.log("Bu doğru!");

  return (
    <div className="counter-card">
      <h2>Counter Component</h2>
      <hr />
      <div className="counter" >{"Şükranı ne kadar seviyorum ?"} {counter}</div>
      <div className="controls">
        <button onClick={addAction}>+</button>
        <button onClick={decreaseAction}>-</button>
        <button onClick={resetAction}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
