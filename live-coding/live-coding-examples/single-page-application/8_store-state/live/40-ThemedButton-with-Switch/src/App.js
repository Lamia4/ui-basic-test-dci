import './App.css';
import React from 'react';

const themeContext = React.createContext('default');

function App() {
  const THEME = 'dark'; // {light, dark} und das zugehörige Layout ist in der CSS-Datei definiert

  const [theme, setTheme] = React.useState(THEME);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="App">
      <a href=".#" onClick={toggleTheme}>Toggle Theme</a>
      <themeContext.Provider value={theme}>
        <Toolbar />
      </themeContext.Provider>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  return (
    <Button />
  );
}

function Button() {
  const localThemeContext = React.useContext(themeContext);
  return (
    <button className={localThemeContext}>Themed Button</button>
  );
}

export default App;
