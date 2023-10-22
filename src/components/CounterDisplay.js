import { Button } from "reactstrap";

const CounterDisplay = (props) => {
  const { userName, counter, addAction, decreaseAction, resetAction } = props;

  return (
    <div className="counter-card">
      <h3>{"Hello " + userName}</h3>
      <hr />
      <div className="counter">{counter}</div>
      <div className="controls">
        <Button active color="primary me-1" size="sm" onClick={addAction}>
          +
        </Button>
        <Button active color="primary me-1" size="sm" onClick={decreaseAction}>
          -
        </Button>
        <Button active color="danger me-1" size="sm" onClick={resetAction}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CounterDisplay;
