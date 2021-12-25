
import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Dogs from './Pages/Dogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dogs" component={ Dogs } />
          <Route exact path="/dogs/:name" component={ Dogs } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;