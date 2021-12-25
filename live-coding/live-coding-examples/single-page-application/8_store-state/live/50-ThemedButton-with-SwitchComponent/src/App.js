import './App.css';
import React from 'react';

const themeContext = React.createContext('default');

function App() {
  //const THEME = 'dark'; // {light, dark} und das zugehörige Layout ist in der CSS-Datei definiert
  const THEME = {
    DARK: 'black',
    LIGHT: 'light'
  };

  const [theme, setTheme] = React.useState(THEME.DARK);

  return (
    <div className="App">
      <ThemeSwitcher THEME={THEME} theme={theme} setTheme={setTheme} />
      <themeContext.Provider value={theme}>
        <Toolbar />
      </themeContext.Provider>
    </div>
  );
}

function ThemeSwitcher({ THEME, theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  }

  return (
    <a href=".#" onClick={toggleTheme}>Toggle Theme</a>
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
