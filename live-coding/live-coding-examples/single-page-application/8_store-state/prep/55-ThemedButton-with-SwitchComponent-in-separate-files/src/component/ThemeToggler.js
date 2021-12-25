import React from 'react';
import { ThemeContext } from '../App';


function ThemeContextToggler() {
    let themeContext = React.useContext(ThemeContext);

    return (<a href=".#" onClick={themeContext = themeContext==='dark'? 'light':'dark'}>Toggle ThemeContext</a>);
}


function ThemeToggler({ toggleTheme }) {
    return (<a href=".#" onClick={toggleTheme}>Toggle Theme</a>);
}

export default ThemeToggler
