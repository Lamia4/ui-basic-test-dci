import React from 'react';
import './App.css';

// adapted from:
// https://reactjs.org/docs/context.html#contextdisplayname

const ThemeContext = React.createContext('light');

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  return (<Button />);
}


function Button() {
  const themeContext = React.useContext(ThemeContext);
  return (<button className={themeContext}>Themed Button ({themeContext})</button>);
}

export default App;
