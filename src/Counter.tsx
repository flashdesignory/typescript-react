import React, { FunctionComponent, useState } from 'react';

type CounterProps = {
    initialCount?: number,
}

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="count">
            <div data-testid="count-display">{count}</div>
            <div className="buttons">
                <button data-testid="button-decrement" onClick={decrement} >-</button>
                <button data-testid="button-increment" onClick={increment} >+</button>
            </div>
        </div>
    );
}

export default Counter;