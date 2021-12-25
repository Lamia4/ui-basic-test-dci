import './App.css';

// adapted from:
// https://reactjs.org/docs/context.html#contextdisplayname

function App() {
  const THEME = 'dark'; // one of {dark, light}

  return (
    <div className="App">
      <Toolbar theme={THEME} />
    </div>
  );
}

function Toolbar({theme}) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
}

function ThemedButton({theme}) {
  return (<Button theme={theme} />);
}


function Button({ theme }) {
  return (<button className={theme}>Themed Button</button>);
}

export default App;
