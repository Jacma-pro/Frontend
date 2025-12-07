import React, { useState } from "react";

const CountBasic = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={{ fontWeight: "bold" }}>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} style={{ backgroundColor: "lightgreen", color: "black"}}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ backgroundColor: "salmon", color: "black" }}>Decrement</button>
        </div>
    );
};

export default CountBasic;
