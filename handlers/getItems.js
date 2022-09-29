const { getItems } = require("../db");

module.exports = async (req, res) => {
	const itemsCollection = getItems();
	const items = await (await itemsCollection.find({})).toArray();
	res.send(items);
};
