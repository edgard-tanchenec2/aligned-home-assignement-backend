const MongoClient = require("mongodb").MongoClient;
let db;

const init = async () => {
	const connectionString = "mongodb://127.0.0.1:27017";
	try {
		const client = await MongoClient.connect(connectionString);
		db = client.db("library");
	} catch (e) {
		console.dir(e);
	}

	await db.collection("items").deleteMany({});
};

module.exports = {
	init,
	getItems: () => db.collection("items"),
};
