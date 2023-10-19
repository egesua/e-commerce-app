const Counter = () => {
    const counter = 0;

    return (
        <div className="counter-card">
            <h2>Counter Component</h2>
            <hr />
            <div className="counter">
                {counter}
            </div>
            <div className="controls">
                <button>+</button>
                <button>-</button>
                <button>Reset</button>
            </div>
        </div>
    )
}