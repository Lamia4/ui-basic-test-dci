import './CSS/App.css';
import Live from "./Components/Live";

function App() {
  const firstPerson = {
    firstName: "Florian",
    lastName: "Hahn"
  }
  return (
    <div className="App">
      <Live persons={firstPerson}/>
    </div>
  );
}

export default App;
