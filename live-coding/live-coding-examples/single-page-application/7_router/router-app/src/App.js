import React, { useState } from 'react';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Dashboard from './Pages/Dashboard';
import ProfileUser from './Pages/Profile_user';

function App()
{
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <div className="App">

      <header>
        <b>Normale Navigation => </b>
        <a href="/">Home</a>&nbsp;&nbsp;
        <a href="/blog">Blog</a>&nbsp;&nbsp;
        <a href="/contacts">Kontakt</a>&nbsp;&nbsp;
        <a href="/user/TestUser123">Profil 1</a>&nbsp;&nbsp;

        {/* der wert hinter /user/ ist unser parameter */}
        <a href="/user/IchBinEinUser">Profil 2</a>&nbsp;&nbsp;
        <a href="/user/GalipKannKochen">Profil 3</a>&nbsp;&nbsp;
        <a href="/error">Fehler</a>
      </header>
      
      {/* Wir rufen den router auf, indem wir das element in unserem code platzieren */}
      <BrowserRouter>

        <br/>

        {/* Link sorgt dafür das die seite nicht neu gerendert wird, wenn ein link angeklickt wird */}
        <header>
          <b>Router Link Navigation => </b>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/blog">Blog</Link>&nbsp;&nbsp;
          <Link to="/contacts">Kontakt</Link>&nbsp;&nbsp;
          <Link to="/user/TestUser123">Profil 1</Link>&nbsp;&nbsp;
          <Link to="/error">Fehler</Link>
        </header>

        <br/>

        {/* NavLink kann durch das attribut activeClassName steuern wie der link aussieht, wenn der browser gerade auf dem spezifischen link ist */}
        <header>
          <b>Router NavLink Navigation => </b>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>&nbsp;&nbsp;
          <NavLink to="/blog" activeClassName="active">Blog</NavLink>&nbsp;&nbsp;
          <NavLink to="/profile" exact activeClassName="active">Profil</NavLink>&nbsp;&nbsp;
          <NavLink to="/contacts" activeClassName="active">Kontakt</NavLink>
          
        </header>

        {
          loggedIn ?
          <button onClick={ () => setLoggedIn(false) }>Logout</button>
          :
          <button onClick={ () => setLoggedIn(true) }>Login</button>
        }

        <Switch>

          {/*
            path: der pfad zum komponenten
            component: der komponent den wir anzreigen wollen
            exact: spezifiziert das NUR an diesem pfad der komponent angezeigt wird
          */}
          <Route exact path="/" component={ Home } />

          <Route exact path="/dashboard">
            {!loggedIn ? <Redirect to="/profile" /> : <Dashboard /> }
          </Route>

          <Route exact path="/profile">
            {loggedIn ? <Redirect to="/dashboard" /> : <ProfileUser /> }
          </Route>

          <Route path="/blog" component={ Blog }/>
          <Route path="/contacts" component={ Contacts } />

          {/* Wichtig ist, hier einen doppelpunkt zu setzen, damit der router weiss, das es sich um einen parameter handelt */}
          <Route path="/user/:id" component={ Profile } />

          {/* mehrere parameter in produktionslogik: /kategorien/:kategorie/produkt/:produktId */}
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
