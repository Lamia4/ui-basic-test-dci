import { JSONFile, Low } from 'lowdb';
const adapter = new JSONFile('db.json');

const db = new Low(adapter);

await db.read();
// "||=" available since node v15.0


db.data ||= { orders: [] };


async function getAllDishes(req, res) {
	console.log(req.body)
	res.send(db.data.orders);
}


async function getById(req, res) {
	const orders = db.data.orders;
	const order = orders.filter((order) => {
		if (order.id === req.params.id) {
			return order;
		}
	})

	res.send(order);
}


async function deleteById(req, res) {
	const orders = db.data.orders;
	const newOrders = orders.filter((order) => {
		if (order.id !== req.params.id) {
			return order;
		}
	})
	db.data.orders = newOrders;
	await db.write();
	res.send("order deleted")
}


async function updateById(req, res) {
	const orders = db.data.orders;

	const [order] = orders.filter((order) => {
		if (order.id === req.params.id) {
			return order;
		}
	})
	order.dish = req.body.dish;
	await db.write();
	res.send("order updated")
}


async function createOrder(req, res) {
    
	db.data.orders.push({"id": db.data.orders.length+1, "dish": req.body.dish });
	await db.write();
	res.send("order placed")
}


async function searchText(req, res) {
    const orders = db.data.orders;

	const filteredOrders = orders.filter((order) => {
		if (order.dish.toLowerCase() === req.params.string.toLowerCase()) {
			return order;
		}
	})
	res.send(filteredOrders)
}


const controller = { getAllDishes, getById, deleteById, updateById, createOrder, searchText };
export default controller;