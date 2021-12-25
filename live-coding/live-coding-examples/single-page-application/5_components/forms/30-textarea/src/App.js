import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NameForm />
    </div>
  );
}

function NameForm() {
  let [name, setName] = React.useState('');
  let [description, setDescription] = React.useState('');

  let [submittedName, setSubmittedName] = React.useState('');
  let [submittedDescription, setSubmittedDescription] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
    console.log("change handle");
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleReset = () => {
    // @TODO: check for alternative via form.reset()...
    setName('');
    setDescription('');
    console.log("reset handle");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedDescription(description);
    console.log("submit handled");
  }

  return (
    <div>
      SubmittedName: {submittedName}
      <br />
      Beschreibung: {submittedDescription}
      <hr />
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Beschreibung:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <br />
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App;
