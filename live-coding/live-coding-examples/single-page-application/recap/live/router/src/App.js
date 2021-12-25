import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <aside>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/dashboard">Dashboard</Link>
          <span> | </span>
          <Link to="/about">About</Link>
          <span> | </span>
          <Link to="/impressum">Impressum</Link>
          <span> | </span>
          <Link to="/xyz">xyz</Link>
        </aside>
        <main>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/(about|impressum|xyz)" component={About} />
        </main>
      </Router>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h2>Dashboard</h2>
      {location.pathname}
    </div>
  );
}

function About() {
  //const history = useHistory();
  //history.push('/dashboard');
  const location = useLocation();

  return (
    <div>
      <h2>About</h2>
      {location.pathname}
      <h2>Impressum</h2>
    </div>
  );
}


export default App;
