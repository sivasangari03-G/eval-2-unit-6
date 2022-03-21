const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
const app = express();
const taskController = require("./controllers/task.controller");
app.use(express.json());
app.use(cors());

app.use("/tasks", taskController);


app.listen(8000, async () => {
	try {
		await connect();
		console.log("App is Listening on Port 8000");
	} catch (err) {
		console.log(err.message);
	}
});