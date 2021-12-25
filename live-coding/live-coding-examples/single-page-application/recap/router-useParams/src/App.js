import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to="/project">Project</Link>
            <span> | </span>
            <Link to="/project/1">Project 1</Link>
            <span> | </span>
            <Link to="/category/animation">Zeichentrick</Link>
            <span> | </span>
            <Link to="/category/animation/12">Zeichentrick bis 12 Jahre</Link>
          </aside>
          <main>
            <Route path="/project/:id?" component={SingleProject} />

            <Route path="/category/:genre/:maxAge?" component={Category} />
          </main>
        </div>
      </Router>
    </div>
  );
}

function SingleProject() {
  const location = useLocation();
  const { id } = useParams();
  return (
    <div>
      <h2>SingleProject</h2>
      location.pathname: {location.pathname}
      <br />
      id: {id}
    </div>
  );
}

function Category() {
  //const location = useLocation();
  const { genre, maxAge } = useParams();
  // optional: API-Request mit "genre und maxAge"
  return (
    <div>
      <h2>Category</h2>
      genre: {genre}
      <br />
      maxAge: {maxAge ? maxAge : "undefined"}
    </div>
  );
}

export default App;
