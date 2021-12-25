import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useLocation, useHistory } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/dashboard">Dashboard</Link>
            <span> | </span>
            <Link to="/about">About</Link>
          </aside>
          <main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </Router>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();

  // programmatically change the route, - kind of a redirect
  /* 
  const history = useHistory()
  history.push('/post/new')
  /**/
  return (
    <div>
      <h2>Dashboard</h2>
      {location.pathname}
    </div>
  );
}

function About() {
  const location = useLocation();
  return (
    <div>
      <h2>About</h2>
      {location.pathname}
    </div>
  );
}

export default App;
