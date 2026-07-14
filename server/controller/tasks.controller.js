const Task = require("../models/tasks.model");
const User = require("../models/users.model");


const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json({ message: "Task successfully saved to MongoDB!" });
    } catch (err) {
        res.status(500).json({ message: "Error saving task", error: err.message });
    }
};

const setupUser = async (req, res) => {
    try {
        const user = new User({ name: "Narasimhan", email: "narasimhan@gmail.com" });
        const savedUser = await user.save();
        console.log("Saved User:", savedUser);
        res.status(201).json({ message: "User Created", userId: savedUser._id });
    } catch (err) {
        console.error("Save Error:", err);
        res.status(500).json({ message: "Error", error: err.message });
    }


};

const initTasks = async (req, res) => {
    try {
        res.status(200).json({ message: "Tasks initialized successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error initializing tasks", error: err.message });
    }
};

module.exports = { createTask, setupUser, initTasks };