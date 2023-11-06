import { useReducer, useState } from "react";
import "./Counter.css";
import CounterDisplay from "./CounterDisplay";


const counterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREASE":
      return state + 1;
      break;
  
    case "DECREASE":
      return state - 1;
      break;
  
      case "ADD":
        return state + payload;
        break;
    
    default:
      return state;
      break;
  }
};

const CounterWithReducer = (props) => {

  const [counter, dispatchCounter] = useReducer(counterReducer, 100);
  const { userName } = props

  const increaseAction = (e) => {
    dispatchCounter({ type: "INCREASE" });
  };

  const decreaseAction = (e) => {
    dispatchCounter({ type: "DECREASE" });
  };

  const resetAction = (e) => {
    //dispatchCounter({ type: "" })
  };

  return (
    <CounterDisplay
      counter={counter}
      userName={userName}
      increaseAction={increaseAction}
      decreaseAction={decreaseAction}
      resetAction={resetAction}
    />
  );
};

export default CounterWithReducer;
