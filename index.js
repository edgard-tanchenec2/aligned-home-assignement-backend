const express = require("express");
const bodyParser = require("body-parser");

const { init: initDb } = require("./db");
const { getItems, createItem, deleteItem, updateItem } = require("./handlers");

const app = express();
const port = 3021;

app.use((req, res, next) => {
	const allowedOrigins = ["http://localhost:3000"];
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin)) {
		res.setHeader("Access-Control-Allow-Origin", origin);
	}

	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});
app.use(bodyParser.json());

app.get(`/items`, getItems);
app.post(`/item`, createItem);
app.put(`/item/:_id`, updateItem);
app.delete(`/item/:_id`, deleteItem);

app.listen(port, () => {
	console.log(`Local server are listening on port ${port}`);
});

(async () => {
	await initDb();
})();
