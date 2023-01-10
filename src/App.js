import './App.css';
import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <Calculator name="Calculator 1.0" />
      </div>
    );
  }
}

export default App;
