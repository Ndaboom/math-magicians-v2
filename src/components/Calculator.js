/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator(props) {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;

  return (
    <div className="calculator">
      <h1>{ props.name }</h1>
      <div className="screen-container">{next || total || 0}</div>
      <div className="touch-pad">
        <button className="gray-color" onClick={clickHandler} type="button">AC</button>
        <button className="gray-color" onClick={clickHandler} type="button">+/-</button>
        <button className="gray-color" onClick={clickHandler} type="button">%</button>
        <button className="orange" onClick={clickHandler} type="button">÷</button>

        <button className="gray-color" onClick={clickHandler} type="button">7</button>
        <button className="gray-color" onClick={clickHandler} type="button">8</button>
        <button className="gray-color" onClick={clickHandler} type="button">9</button>
        <button className="orange" onClick={clickHandler} type="button">x</button>

        <button className="gray-color" onClick={clickHandler} type="button">4</button>
        <button className="gray-color" onClick={clickHandler} type="button">5</button>
        <button className="gray-color" onClick={clickHandler} type="button">6</button>
        <button className="orange" onClick={clickHandler} type="button">-</button>

        <button className="gray-color" onClick={clickHandler} type="button">1</button>
        <button className="gray-color" onClick={clickHandler} type="button">2</button>
        <button className="gray-color" onClick={clickHandler} type="button">3</button>
        <button className="orange" onClick={clickHandler} type="button">+</button>
      </div>
      <div className="sub-touch-pad">
        <button className="gray-color zero-btn" onClick={clickHandler} type="button">0</button>
        <button className="gray-color dot-btn" onClick={clickHandler} type="button">.</button>
        <button className="orange equal-btn" onClick={clickHandler} type="button">=</button>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  name: PropTypes.string,
};

Calculator.defaultProps = {
  name: 'Calculator 1.0',
};

export default Calculator;
