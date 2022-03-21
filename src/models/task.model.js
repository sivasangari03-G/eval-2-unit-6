const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
	{
		id: { type: String, required: true },
		title: { type: String, required: true },
		status: { type: Boolean, required: true },
		subTask: [{ type: String, required: true }],
	},
	{
		versionkey: false,
		timestamps: true,
	}
);
module.exports = mongoose.model("task", taskSchema);
