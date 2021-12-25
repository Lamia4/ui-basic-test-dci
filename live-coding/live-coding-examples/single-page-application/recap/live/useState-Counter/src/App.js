import './App.css';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ShowCount count={count} />
      <ClickButton count={count} setCount={setCount} />
    </div>
  );
}

function ShowCount({ count }) {
  return (
    <p>You clicked {count} times</p>
  );
}

function ClickButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Click</button>
  )
}

export default App;
