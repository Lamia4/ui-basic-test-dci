import React from 'react';
import './App.css';

function App() {

  let [name, setName] = React.useState('default');

  return (
    <div className="App">
      <h1>React Forms</h1>
      <div>
        State-Variable Name: {name}
      </div>

      <hr />
      <br />

      <NameForm setName={setName} />
    </div>
  );
}

function NameForm({ setName }) {
  const defaultValue = '';
  let [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log('handle change');
  }

  const handleReset = (event) => {
    console.log('reset handled');
    setValue(defaultValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit handled with value: ' + value);
    setName(value);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <br />
      <br />
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
