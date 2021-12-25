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
  const defaultState = {
    fullname: '',
    description: ''
  };
  let [localState, setLocalState] = React.useState(defaultState);

  let [submittedName, setSubmittedName] = React.useState('');
  let [submittedDescription, setSubmittedDescription] = React.useState('');

  const handleChange = (event) => {
    let newState = {};
    Object.assign(newState, localState);
    Object.seal(newState); // verhindert, dass neue Attribute hinzugefügt werden
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
    /*
    newState = {
      fullname: '',
      description: ''
    }
    */
    /* ausgehend von einem leeren Formular 
       und für 
       event.target.name == "fullname"
       event.target.value == "Albert"
    */
    //newState["fullname"] = "Albert";
    newState[event.target.name] = event.target.value;
    /*
    newState = {
      fullname: 'Albert',
      description: ''
    }
    */

    setLocalState(newState);

    console.log("change handle");
  }

  const handleReset = () => {
    // @TODO: check for alternative via form.reset()...
    setLocalState(defaultState);
    console.log("reset handle");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(localState.fullname);
    setSubmittedDescription(localState.description);
    console.log("submit handled");
    console.log(localState);
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
    </div>
  )
}

export default App;
