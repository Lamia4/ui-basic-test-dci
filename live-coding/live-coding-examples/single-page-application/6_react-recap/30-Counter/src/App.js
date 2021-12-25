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
      <ClickSubComponent countP={count} setCountP={setCount} />
      <SubComponent countP={count} />
    </div>
  )
}

function ClickSubComponent({ countP, setCountP }) {
  return (
    <div>
      <button onClick={() => setCountP(countP + 1)}>click from ClickSubComponent</button>
    </div>
  );
}

function SubComponent({ countP }) {
  return (
    <div>
      <SubSubComponent countP2={countP} />
    </div>
  );
}

function SubSubComponent({ countP2 }) {
  return (
    <div>
      SubSubCompontent: {countP2}
    </div>
  );
}

export default App;
