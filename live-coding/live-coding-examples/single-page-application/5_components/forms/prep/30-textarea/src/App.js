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

      <NameForm setName={setName} setDescription={setDescription}/>
    </div>
  );
}

function NameForm({ setName, setDescription }) {
  const defaultValue = '';
  let [localName, setLocalName] = React.useState(defaultValue);
  let [localDescription, setLocalDescription] = React.useState('');

  const handleNameChange = (event) => {
    setLocalName(event.target.value);
    console.log('handle name change');
  }

  const handleDescriptionChange = (event) => {
    setLocalDescription(event.target.value);
    console.log('handle description change');
  }

  const handleReset = (event) => {
    console.log('reset handled');
    setLocalName(defaultValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit handled with value: ' + localName);
    setName(localName);
    setDescription(localDescription);
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Name:
        <input type="text" value={localName} onChange={handleNameChange} />
      </label>
      <br />
      <br />
      <label>
        Beschreibung:
        <textarea value={localDescription} onChange={handleDescriptionChange} />
      </label>
      <br/>
      <br />
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
