const Task = require("../models/tasks.model");
const User = require("../models/users.model");


const getallTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Error fetching tasks", error: err.message });
    }
};


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

// PUT: To update the task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params; // ரவுட்டில் இருந்து ஐடியை எடுக்கும்
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", updatedTask });
    } catch (err) {
        res.status(500).json({ message: "Error updating task", error: err.message });
    }
};

// DELETE: Remove task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting task", error: err.message });
    }
};

module.exports = { setupUser, initTasks, getallTask, createTask, updateTask, deleteTask };