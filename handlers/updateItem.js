const { ObjectId } = require("mongodb");
const { getItems } = require("../db");

module.exports = async (req, res) => {
	const { _id } = req.params;
	const { url, name, type, youtubeId } = req.body;
	const itemsCollection = getItems();
	const result = await itemsCollection.updateOne({ _id: ObjectId(_id) }, { $set: { url, name, type, youtubeId } });
	res.send(result);
};
