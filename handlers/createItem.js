const { getItems } = require("../db");

module.exports = async (req, res) => {
	const { url, name, type, youtubeId } = req.body;
	const itemsCollection = getItems();
	const result = await itemsCollection.insertOne({ url, name, type, youtubeId });
	res.send(result);
};
