import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>
      <ButtonForm />
    </div>
  );
}

function ButtonForm({ setName }) {
  const defaultValue = 'default value';
  let [value, setValue] = React.useState(defaultValue);

  const handleClick = (event) => {
    setValue(event.target.value);
  }

  return (
    <React.Fragment>
      Button-Value: {value}
      <hr />
      <button type="button" onClick={handleClick} value="value_1">Button 1</button>
      <button type="button" onClick={handleClick} value="value_2">Button 2</button>
      {/*more on React and buttons: https://react.school/ui/button */}
    </React.Fragment>
  );
}

export default App;
