// Wir können einen default export beim import so nennen wie wir wollen, eine standard konvention ist, sie bei klassen so zu nennen, wie die klasse heisst. Also in unserem fall "App", unser sogenannter namespace.
import UnsereApp from './app.js';
import { makePage } from './utils.js'
import * as User from './user.js';

// Wir können jetzt unsere klasse nutzen, wie gewohnt.
const app = new UnsereApp(25);
const newValue = app.createNewValue();

console.log(newValue);

makePage(newValue);

console.log(User.firstName + " " + User.lastName);
