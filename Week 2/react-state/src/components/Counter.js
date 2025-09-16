import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const handlePlusClick = () => {
        setCount(count+1)
    }
    const handleMinusClick = () => {
        if (count <= 0){
            return
        }
        setCount(count-1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleMinusClick}>[-]</button>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}

export default Counter
