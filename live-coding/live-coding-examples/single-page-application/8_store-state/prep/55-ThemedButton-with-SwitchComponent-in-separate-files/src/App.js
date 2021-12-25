import React from 'react';
import './App.css';
import ThemeToggler from './component/ThemeToggler';
import Toolbar from './component/Toolbar';

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

export default App;
export { ThemeContext };
