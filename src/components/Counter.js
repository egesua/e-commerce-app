import { useState } from "react";
import "./Counter.css";
import CounterDisplay from "./CounterDisplay";

const Counter = (props) => {

  const [counter, setCounter] = useState(0)
  const { userName } = props

  const addAction = (e) => {
    setCounter(counter + 1);
  };

  const decreaseAction = (e) => {
    setCounter(counter - 1);
  };

  const resetAction = (e) => {
    setCounter(0);
  };

  return (
    <CounterDisplay
      counter={counter}
      userName={userName}
      addAction={addAction}
      decreaseAction={decreaseAction}
      resetAction={resetAction}
    />
  );
};

export default Counter;
