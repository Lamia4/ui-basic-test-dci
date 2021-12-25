import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/project/1">Projekt 1</Link>
        <span> | </span>
        <Link to="/project/2">Projekt 2</Link>
        <Route path="/project/:id">
          <SingleProject />
        </Route>
      </div>
    </Router>
  );
}

function SingleProject() {
  const { id } = useParams();
  return (
    <React.Fragment>
      <h2>Project</h2>
      id: { id}
    </React.Fragment>
  );
}

export default App;
