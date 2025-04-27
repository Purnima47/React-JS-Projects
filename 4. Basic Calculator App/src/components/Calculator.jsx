import React, { useState } from 'react';
import './styleCalculator.css';

const Calculator = () => {
    const [inputVal, setInputVal] = useState('');

    const display = (value) => {
        // Prevent consecutive operators like ++, --, etc.
        const operators = ['+', '-', '*', '/'];
        const lastChar = inputVal.charAt(inputVal.length - 1);

        // Prevent adding multiple operators consecutively
        if (operators.includes(lastChar) && operators.includes(value)) return;

        // Prevent adding multiple decimal points in a single number
        if (value === '.' && lastChar === '.') return;

        setInputVal(inputVal + value);
    };

    const calculate = () => {
        try {
            // Use Function constructor to safely evaluate expressions
            setInputVal(Function('return ' + inputVal)());
        } catch (error) {
            setInputVal('Error');
        }
    };

    const clear = () => setInputVal('');

    return (
        <form className='calculator' name='calc'>
            <input type='text' className='value' value={inputVal} readOnly />

            <span className='num clear' onClick={clear}>c</span>
            <span onClick={() => display("/")}>/</span>
            <span onClick={() => display("*")}>*</span>
            <span onClick={() => display("7")}>7</span>
            <span onClick={() => display("8")}>8</span>
            <span onClick={() => display("9")}>9</span>
            <span onClick={() => display("-")}>-</span>
            <span onClick={() => display("4")}>4</span>
            <span onClick={() => display("5")}>5</span>
            <span onClick={() => display("6")}>6</span>
            <span className="plus" onClick={() => display("+")}>+</span>
            <span onClick={() => display("1")}>1</span>
            <span onClick={() => display("2")}>2</span>
            <span onClick={() => display("3")}>3</span>
            <span onClick={() => display("0")}>0</span>
            <span onClick={() => display("00")}>00</span>
            <span onClick={() => display(".")}>.</span>
            <span className="num equal" onClick={calculate}>=</span>
        </form>
    );
};

export default Calculator;
