import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Counter />

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={makeHandlerCountClickEvent(count, setCount)}>click</button>
      <button onClick={makeHandlerCountClickEventWithFunctionKeyword(count, setCount)}>click</button>
    </div>
  )
}

/**
 * Higher Order Function returning a function
 * @param {} count 
 * @param {*} setCount 
 * @returns a callback function
 */
function makeHandlerCountClickEvent(count, setCount) {
  return () => setCount(count + 1);
}

function makeHandlerCountClickEventWithFunctionKeyword(count, setCount) {
  const f = function () {
    let newValue = count + 1;
    console.log(newValue);
    setCount(newValue);
  }

  return f;
}

export default App;
