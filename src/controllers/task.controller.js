const express = require("express");

const router = express.Router();

const Task = require("../models/task.model");

router.get("", async (req, res) => {
	try {
		const page = req.query.page || 1;
		const size = req.query.size || 3;
		const tasks = await Task.find()
			.skip((page - 1) * size)
			.limit(size)
			.lean()
			.exec();

		const totalPage = Math.ceil(
			(await Task.find().countDocuments()) / size
		);
		return res.status(200).json({ tasks, totalPage });
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("/", async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json(task);
	} catch (e) {
		return res.status(500).send(err.message);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const task = await Task.findById(req.params.id).lean().exec();
		res.status(200).json(task);
	} catch (e) {
		return res.status(500).send(err.message);
	}
});

router.patch("/:id", async (req, res) => {
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(201).json(task);
	} catch (e) {
		return res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id).lean().exec();
		res.status(201).json(task);
	} catch (e) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
