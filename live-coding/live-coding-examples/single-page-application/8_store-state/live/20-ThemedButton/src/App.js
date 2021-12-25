import './App.css';

function App() {
  const THEME = 'light'; // {light, dark} und das zugehörige Layout ist in der CSS-Datei definiert
  return (
    <div className="App">
      <Toolbar theme={THEME} />
    </div>
  );
}

function Toolbar({ theme }) {
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  )
}

function ThemedButton({ theme }) {
  return (
    <Button theme={theme} />
  );
}

function Button({ theme }) {
  return (
    <button className={theme}>Themed Button</button>
  );
}

export default App;
