const { ObjectId } = require("mongodb");
const { getItems } = require("../db");

module.exports = async (req, res) => {
	const { _id } = req.params;
	const itemsCollection = getItems();
	const result = await itemsCollection.deleteOne({ _id: ObjectId(_id) });
	res.send(result);
};
