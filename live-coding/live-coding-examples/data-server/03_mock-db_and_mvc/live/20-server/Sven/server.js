// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';
import { JSONFile, Low } from 'lowdb';

const app = express();
app.use(express.json());

const adapter = new JSONFile('db.json');
const db = new Low(adapter);

await db.read();
db.data ||= { messages: [] };

app.listen(3000, () => {
	console.log('listening on port 3000');
});

// http://localhost:3000/messages/1

 app.get('/messages/all', async (req, res) => {
     res.status("200").json(db.data);
 });

  app.get('/messages/:id', async (req, res) => {
  	// console.log(req.params);
  	const id = req.params.id;
      res.status("200").json(db.data.messages.find (element => id === element.id));
  });

 app.get('/messages/:id/count', async (req, res) => {
 	let id = req.params.id;
 	const dataMessages = db.data.messages;
 	const dataId = dataMessages.filter(element => id === element.id);
	const index = dataMessages.map((ele) => {
		return ele.id; 
	}).indexOf(id);
	let countArr = [];
	for (let i = index; i < dataMessages.length; i++) {
		countArr.push(dataMessages[i]);
	}
     res.json(countArr);
 });





 app.delete('/messages/:id', async (req, res) => {
 	// console.log(req.params);
 	const id = req.params.id;
 	res.status("200").json(db.data.messages.filter (element => id !== element.id));
 });

 app.put('/messages/:id', async (req, res) => {
	// const id = req.params.id;
 	// res.status("200").json(db.data.messages.filter (element => id === element.id));
	
	console.log(req.body);
	db.data.messages.push(req.body);
	await db.write();
	res.send("data written");
 });



app.post('/messages', async (req, res) => {
	const dataMessages = db.data.messages;
	let id = dataMessages.length+1;
	req.body["id"] = id;

	console.log(req.body);

	db.data.messages.push(req.body);
	await db.write();
	res.send("data written");
});

