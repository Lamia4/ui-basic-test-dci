import React from 'react';
import './App.css';

// sample code from:
// https://www.react.express/hooks/usereducer

function App() {
  const ACTION_TYPE = {
    COLOR_CHANGE: "colorChange",
    PET_CHANGE: "petChange"
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.COLOR_CHANGE:
        return { ...state, color: action.value };
      case ACTION_TYPE.PET_CHANGE:
        return { ...state, pet: action.value };
      default:
        console.error("error: not implemented");
    }
  }

  const INITIAL_STATE = {
    color: 'Schwarz',
    pet: 'Katze'
  }

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <label>Wähle eine Farbe und ein Tier: </label>
      <br />
      <ColorAndPetSelector
        state={state}
        dispatch={dispatch}
        ACTION_TYPE={ACTION_TYPE}
      />
      <br />
      <br />
      <hr />
      Deine Auswahl:
      <ColorAndPetDisplay state={state} />
    </div>
  )
}

function ColorAndPetSelector({ state, dispatch, ACTION_TYPE }) {
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

  return (
    <React.Fragment>
      <select
        value={state.color}
        onChange={(event) => dispatch({ type: ACTION_TYPE.COLOR_CHANGE, value: event.target.value })}
      >
        <option value={COLOR.BLACK}>{COLOR.BLACK}</option>
        <option value={COLOR.BLUE}>{COLOR.BLUE}</option>
        <option value={COLOR.PINK}>{COLOR.PINK}</option>
      </select>
      <select
        value={state.pet}
        onChange={(event) => dispatch({ type: ACTION_TYPE.PET_CHANGE, value: event.target.value })}
      >
        <option value={PET.CAT}>{PET.CAT}</option>
        <option value={PET.DOG}>{PET.DOG}</option>
        <option value={PET.MOUSE}>{PET.MOUSE}</option>
      </select>
    </React.Fragment>
  );
}

function ColorAndPetDisplay({ state }) {
  return (
    <dl>
      <dt>Farbe:</dt><dd>{state.color}</dd>
      <dt>Tier:</dt><dd>{state.pet}</dd>
    </dl>
  );
}

export default App;
