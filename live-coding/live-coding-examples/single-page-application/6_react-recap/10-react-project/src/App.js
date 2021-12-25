import './App.css';
import logo from './logo.svg';

function App() {
  // JSX:

  return (
    <div className="App">
      Hello, <PersonWithoutDestructuring surname="Albert" />
      <br />
      Hello, <Person surname="Albert" />
      <br />
      Hello, <PersonWithLastname surname="Albert" lastname="Einstein" />
    </div>
  );
}

function PersonWithoutDestructuring(props) {
  return (
    <span>
      {props.surname}
    </span>
  );
}

function Person({ surname }) {
  return (
    <span>
      {surname}
    </span>
  );
}

function PersonWithLastname({ surname, lastname }) {
  return (
    <span>
      {surname} {lastname}
    </span>
  );
}


export default App;
