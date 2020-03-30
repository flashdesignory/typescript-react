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
            <p>{count}</p>
            <div className="buttons">
                <button onClick={decrement} >-</button>
                <button onClick={increment} >+</button>
            </div>
        </div>
    );
}

export default Counter;