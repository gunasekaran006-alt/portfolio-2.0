const Task = require("../models/tasks.model");

const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json({ message: "Task successfully saved to MongoDB!" });
    } catch (err) {
        res.status(500).json({ message: "Error saving task", error: err.message });
    }
};

module.exports = { createTask };