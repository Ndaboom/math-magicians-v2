/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator">
        <h1>{ this.props.name }</h1>
        <div className="screen-container">0</div>
        <div className="touch-pad">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange" type="button">÷</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="orange" type="button">x</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="orange" type="button">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="orange" type="button">+</button>

          <button type="button">0</button>
          <button type="button">.</button>
          <button className="orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;