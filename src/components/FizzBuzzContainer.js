import React, { useState } from 'react';
import FizzBuzzList from './FizzBuzz/FizzBuzzList';
import './FizzBuzzContainer.css';

const FizzBuzzContainer = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [limit, setLimit] = useState('');
    const regEx = new RegExp('^\\d+$');
    //input textbox change handler
    const inputChangeHandler = (value) => {
        setLimit(value);
        if (regEx.test(value)) {
            setErrorMessage('');            
        }
        else {
            setErrorMessage('Please enter a valid number');
        }
    }

    return (
        <>
            <h2>Fizz-Buzz App</h2>           
            <input
                type="number"
                value={limit}
                className="InputElement"
                placeholder="Enter a limit"
                id="limit"
                onChange={e => inputChangeHandler(e.target.value)} />

            <FizzBuzzList limit={limit} />

            <p>{errorMessage}</p>
        </>
    );
}

export default FizzBuzzContainer;