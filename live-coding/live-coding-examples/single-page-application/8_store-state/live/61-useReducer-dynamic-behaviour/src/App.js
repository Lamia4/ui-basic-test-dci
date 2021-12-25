import React from 'react';
import './App.css';

// sample code from:
// https://www.react.express/hooks/usereducer

function App() {

  const COLOR = {
    BLACK: 'Schwarz',
    BLUE: 'Blau',
    PINK: 'Pink'
  };

  const PET = {
    CAT: 'Katze',
    DOG: 'Hund',
    MOUSE: 'Maus'
  };

  const [color, setColor] = React.useState(COLOR.BLACK);
  const [pet, setPet] = React.useState(PET.CAT);

  const colorHandler = (event) => {
    setColor(event.target.value);
  }

  const petHandler = (event) => {
    setPet(event.target.value);
  }

  return (
    <div>
      <label>Wähle eine Farbe und ein Tier: </label>
      <br />
      <select value={color} onChange={colorHandler}>
        <option value={COLOR.BLACK}>{COLOR.BLACK}</option>
        <option value={COLOR.BLUE}>{COLOR.BLUE}</option>
        <option value={COLOR.PINK}>{COLOR.PINK}</option>
      </select>
      <select value={pet} onChange={petHandler}>
        <option value={PET.CAT}>{PET.CAT}</option>
        <option value={PET.DOG}>{PET.DOG}</option>
        <option value={PET.MOUSE}>{PET.MOUSE}</option>
      </select>
      <br />
      <br />
      <hr />
      Deine Auswahl:
      <dl>
        <dt>Farbe:</dt><dd>{color}</dd>
        <dt>Tier:</dt><dd>{pet}</dd>
      </dl>
    </div>
  )
}

export default App;
