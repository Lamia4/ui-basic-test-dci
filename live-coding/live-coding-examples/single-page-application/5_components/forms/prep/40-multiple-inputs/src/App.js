import React from 'react';
import './App.css';

function App() {

  let [name, setName] = React.useState('default');
  let [description, setDescription] = React.useState('n/a');

  return (
    <div className="App">
      <h1>React Forms</h1>
      <h2>Root States</h2>

      <h3>Name</h3>
      {name}

      <h3>Description</h3>
      <pre>{description}</pre>

      <br />
      <hr />
      <br />

      <NameForm setName={setName} setDescription={setDescription} />
    </div>
  );
}

function NameForm({ setName, setDescription }) {
  const defaultState = {
    fullname: '',
    description: ''
  };
  let [localState, setLocalState] = React.useState(defaultState);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    let newState = {}; // React needs the reference to change => new Object needed
    Object.assign(newState, localState);
    Object.seal(newState); // prevent addition of new attributes, therefore enable early detection of spelling errors

    newState[target.name] = value;

    setLocalState(newState);

    console.log('change handled');
  }

  const handleReset = (event) => {
    console.log('reset handled');
    setLocalState(defaultState);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit handled with value: ' + localState);
    setName(localState.fullname);
    setDescription(localState.description);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Name:
        <input name="fullname" type="text" value={localState.fullname} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Beschreibung:
        <textarea name="description" value={localState.description} onChange={handleChange} />
      </label>
      <br />
      <br />
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
