import React from 'react';
import './App.css';

// sample code from:
// https://www.react.express/hooks/usereducer

function App() {
  return (
    <div>
      <label>Wähle eine Farbe und ein Tier: </label>
      <br />
      <select value="black">
        <option value="black">Schwarz</option>
        <option value="blue">Blau</option>
        <option value="pink">Pink</option>
      </select>
      <select value="cat">
        <option value="cat">Katze</option>
        <option value="dog">Hund</option>
        <option value="mouse">Maus</option>
      </select>
      <br />
      <br />
      <hr />
      Deine Auswahl:
      <dl>
        <dt>Farbe:</dt><dd>Schwarz</dd>
        <dt>Tier:</dt><dd>Hund</dd>
      </dl>
    </div>
  )
}

export default App;
