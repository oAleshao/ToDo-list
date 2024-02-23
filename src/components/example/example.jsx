import React, { useState } from 'react';

const Example = () => {
    const [i, setI] = useState(1);
    const [inputValue, setInputValue] = useState(1);
    const [vanish, setVanish] = useState(true);

    const decrement = () => {
        setI(i - inputValue);
    }

    const increment = () => {
        setI(i + +inputValue);
    }

    const toggleVanish = () => setVanish(!vanish);

    return (
        <div>
            <button onClick={toggleVanish}>{vanish ? 'hide' : 'show'}</button>

            {vanish && (<div>
                <button onClick={decrement}>-</button>
                {i}
                <input type='number' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
                <button onClick={increment}>+</button>
            </div>
            )}
        </div>

    );
}

export default Example;
