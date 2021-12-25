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

        <Counter initialCount={2} />

      </header>
    </div>
  );
}

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButton count={count} setCount={setCount} />
    </div>
  )
}

function CounterButton({count, setCount}) {
  return <button onClick={() => setCount(count+1)}>click</button>
}

export default App;
