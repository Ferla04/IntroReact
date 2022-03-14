import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
        //Si no tengo el valor principal tengo esta opción
        // setCounter(c => c +1 );
    }

    const handleSubtract = () => setCounter(counter - 1);
    
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ () => setCounter(value) }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}


export default CounterApp;