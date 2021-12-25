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

  let [submittedName, setSubmittedName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
    console.log("change handle");
  }

  const handleReset = () => {
    // @TODO: check for alternative via form.reset()...
    setName('');
    console.log("reset handle");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    console.log("submit handled");
  }

  return (
    <div>
      SubmittedName: {submittedName}
      <hr />
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App;
