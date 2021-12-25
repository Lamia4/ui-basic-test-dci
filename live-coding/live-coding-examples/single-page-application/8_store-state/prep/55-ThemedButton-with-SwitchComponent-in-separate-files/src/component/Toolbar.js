import React from 'react';
import { ThemeContext } from '../App';

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  return (<Button />);
}

function Button() {
  const themeContext = React.useContext(ThemeContext);
  return (<button className={themeContext}>Themed Button ({themeContext})</button>);
}

export default Toolbar
