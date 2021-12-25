import express from 'express';
import { JSONFile, Low } from 'lowdb';

import middel from "./midd/middel.js";

import validation from './validate.js';



const server = express();
server.use(express.json());

const adapter = new JSONFile('colors.json');
const colors = new Low(adapter);

await colors.read();

colors.data ||= { messages: [] };

server.listen(3000, () => {
    
	console.log('listening on port 3000');
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use(middel);

server.use((req, res, next) => {

    validation();   


    next();
});


server.get('/home', async (req, res) => {
	
	res.send(color);
})


