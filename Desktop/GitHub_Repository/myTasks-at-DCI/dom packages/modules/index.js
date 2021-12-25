import UnsereApp from './app.js'; 

import {makePage} from './utils.js'

import * as User from './user.js' 

const app = new UnsereApp(25);

const newValue = app.createNewValue();


makePage(newValue);




