import React from 'react';
import './App.css';

function App() {

  let [gender, setGender] = React.useState('');

  return (
    <div className="App">
      <h1>React Forms</h1>
      <div>
        State-Variable Gender: {gender}
      </div>

      <hr />
      <br />

      <GenderSelector setGender={setGender} />
    </div>
  );
}

function GenderSelector({ setGender }) {
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
    setGender(value);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Geschlecht:
        <select value={value} onChange={handleChange}>
          <option value="">---</option>
          <option value="divers">divers</option>
          <option value="männlich">männlich</option>
          <option value="weiblich">weiblich</option>
        </select>
      </label>
      <br />
      <br />
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
