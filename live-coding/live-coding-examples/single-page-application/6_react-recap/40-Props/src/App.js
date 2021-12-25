import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        <WelcomeMessageProps name="test" />
        <WelcomeMessageProps name={"test2"} />
        <WelcomeMessagePropsDestructured name="destructured" />
        <WelcomeMessagePropsDestructured name="destructured2" notdefined="not defined" />
        <WelcomeMessageChildren>Child</WelcomeMessageChildren>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function WelcomeMessage() {
  return <p>Welcome!</p>
}

function WelcomeMessageProps(props) {
  return <p>Welcome! {props.name}</p>
}

function WelcomeMessagePropsDestructured({ name }) {
  return <p>Welcome! {name}</p>
}

function WelcomeMessageChildren({ children }) {
  return <p>Welcome! {children}</p>
}

export default App;
