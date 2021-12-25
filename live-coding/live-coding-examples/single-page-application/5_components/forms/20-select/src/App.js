import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <GenderSelectForm />
    </div>
  );
}

function GenderSelectForm() {
  let [gender, setGender] = React.useState('');

  let [submittedGender, setSubmittedGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log("change handle");
  }

  const handleReset = () => {
    // @TODO: check for alternative via form.reset()...
    setGender('');
    console.log("reset handle");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedGender(gender);
    console.log("submit handled");
  }

  return (
    <div>
      SubmittedName: {submittedGender}
      <hr />
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <label>
          Geschlecht:
          <select value={gender} onChange={handleChange}>
            <option value="">---</option>
            <option value="divers">divers</option>
            <option value="männlich">männlich</option>
            <option value="weiblich">weiblich</option>
          </select>
        </label>
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App;
