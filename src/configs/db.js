const mongoose = require("mongoose");

const connect = () => {
	return new mongoose.connect(
		"mongodb+srv://sivasangari:sivasangari@cluster0.v8v1s.mongodb.net/evalTwo?retryWrites=true&w=majority"
	);
};

module.exports = connect;
