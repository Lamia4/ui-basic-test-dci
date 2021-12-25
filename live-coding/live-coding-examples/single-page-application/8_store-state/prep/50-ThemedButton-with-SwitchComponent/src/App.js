import React from 'react';
import './App.css';

// adapted from:
// https://reactjs.org/docs/context.html#contextdisplayname

const ThemeContext = React.createContext('default');

function App() {
  const [theme, setCurrentTheme] = React.useState('default');

  const toggleTheme = () => {
    setCurrentTheme(theme === 'dark'? 'light' : 'dark');
  };

  return (
    <div className="App">

      <ThemeToggler toggleTheme={toggleTheme} />

      <br />
      <br />

      <ThemeContext.Provider value={theme}>
        <Toolbar />
      </ThemeContext.Provider>

    </div>
  );
}

function ThemeContextToggler() {
  let themeContext = React.useContext(ThemeContext);

  return (<a href=".#" onClick={themeContext = themeContext==='dark'? 'light':'dark'}>Toggle ThemeContext</a>);
}


function ThemeToggler({ toggleTheme }) {
  return (<a href=".#" onClick={toggleTheme}>Toggle Theme</a>);
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
