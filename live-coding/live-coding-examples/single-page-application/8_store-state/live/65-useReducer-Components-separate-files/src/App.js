import React from 'react';
import './App.css';

import ColorAndPetSelector from './component/ColorAndPetSelector';
import ColorAndPetDisplay from './component/ColorAndPetDisplay';

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

export default App;
