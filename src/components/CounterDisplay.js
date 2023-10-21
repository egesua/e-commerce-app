const CounterDisplay = (props) => {
  const { userName, counter, addAction, decreaseAction, resetAction } =
    props;

  return (
    <div className="counter-card">
      <h3>{"Hello " + userName}</h3>
      <hr />
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={addAction}>+</button>
        <button onClick={decreaseAction}>-</button>
        <button onClick={resetAction}>Reset</button>
      </div>
    </div>
  );
};

export default CounterDisplay;
