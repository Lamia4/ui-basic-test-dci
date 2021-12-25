// source:
// https://github.com/typicode/lowdb/tree/d940fcaeff2db9f8b731685159a0039d67067823/examples#readme

import express from 'express';

import router from './routes/router.js'
import controller from './controller/controller.js'

const app = express();



app.use(express.json());
app.use("/orders", router);


app.get("/search/:string", controller.searchText)


app.listen(9000, () => {
	console.log('listening on port 9000');
});