import React, { useState } from 'react';

function Counter({ initCount })
{
    const [ count, setCount ] = useState(initCount);

    const handleIncrement = () =>
    {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () =>
    {
        setCount(prevCount => prevCount - 1);
    }

    return(
        <div>
            <h5>Counter ist { count }</h5>
            <button onClick={ handleIncrement }>+</button>
            <button onClick={ handleDecrement }>-</button>
            <button onClick={ () => setCount(initCount) }>Reset</button>
        </div>
    )
}

export default Counter;