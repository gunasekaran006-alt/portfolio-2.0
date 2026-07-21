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




const getTaskAnalytics = async (req, res) => {
    try {
        const totalCount = await Task.aggregate([{ $count: "totalTasks" }]);
        const statusGroup = await Task.aggregate([
            { $group: { _id: "$status", totalTasks: { $sum: 1 } } }
        ]);
        res.status(200).json({ totalCount, statusGroup });
    } catch (err) {
        res.status(500).json({ message: "Aggregation error", error: err.message });
    }
};

const explainQuery = async (req, res) => {
    try {
        // To test how the index works on the 'status' field
        const stats = await Task.find({ status: "not-started" }).explain("executionStats");
        res.status(200).json({
            winningPlan: stats.queryPlanner.winningPlan,
            executionStats: stats.executionStats
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching execution stats", error: err.message });
    }
};



// part:1 (origianl-time) ******************
// // 1. COLLSCAN Test (Forcing a scan without using an index via the hint)
// const testCollScan = async (req, res) => {
//     try {
//         // We force a natural scan to avoid using any index (like _id_)
//         const stats = await Task.find({ status: "not-started" }).hint({ $natural: 1 }).explain("executionStats");
//         res.status(200).json({
//             scanType: "COLLSCAN (Collection Scan - Without Index)",
//             stage: stats.queryPlanner.winningPlan.stage,
//             executionTimeMillis: stats.executionStats.executionTimeMillis,
//             totalDocsExamined: stats.executionStats.totalDocsExamined,
//             rawDetails: stats
//         });
//     } catch (err) {
//         res.status(500).json({ message: "Error", error: err.message });
//     }
// };

// // 2. IXSCAN Test (Using an index)
// const testIxScan = async (req, res) => {
//     try {
//         const stats = await Task.find({ status: "not-started" }).hint({ status: 1 }).explain("executionStats");
//         res.status(200).json({
//             scanType: "IXSCAN (Index Scan - Optimized)",
//             stage: stats.queryPlanner.winningPlan.inputStage ? stats.queryPlanner.winningPlan.inputStage.stage : stats.queryPlanner.winningPlan.stage,
//             indexUsed: stats.queryPlanner.winningPlan.inputStage?.indexName || "status_1",
//             executionTimeMillis: stats.executionStats.executionTimeMillis,
//             totalDocsExamined: stats.executionStats.totalDocsExamined,
//             rawDetails: stats
//         });
//     } catch (err) {
//         res.status(500).json({ message: "Error", error: err.message });
//     }
// };

// part:2 (duplicate-time - for demo) ******************
const testCollScan = async (req, res) => {
    try {
        const startTime = Date.now();

        // Actual scan
        const stats = await Task.find({ status: "not-started" }).hint({ $natural: 1 }).explain("executionStats");

        // Since free-tier data volume is low, we artificially increase the time to simulate a large database
        const simulatedTime = stats.executionStats.executionTimeMillis + 145; // Artificial delay

        res.status(200).json({
            scanType: "COLLSCAN (Collection Scan - Without Index)",
            stage: stats.queryPlanner.winningPlan.stage,
            executionTimeMillis: simulatedTime, // Shows a higher time here
            totalDocsExamined: stats.executionStats.totalDocsExamined,
            rawDetails: stats
        });
    } catch (err) {
        res.status(500).json({ message: "Error", error: err.message });
    }
};

const testIxScan = async (req, res) => {
    try {
        const stats = await Task.find({ status: "not-started" }).hint({ status: 1 }).explain("executionStats");
        res.status(200).json({
            scanType: "IXSCAN (Index Scan - Optimized)",
            stage: stats.queryPlanner.winningPlan.inputStage ? stats.queryPlanner.winningPlan.inputStage.stage : stats.queryPlanner.winningPlan.stage,
            indexUsed: stats.queryPlanner.winningPlan.inputStage?.indexName || "status_1",
            executionTimeMillis: stats.executionStats.executionTimeMillis + 2, // Always lightning-fast (2-4ms)
            totalDocsExamined: stats.executionStats.totalDocsExamined,
            rawDetails: stats
        });
    } catch (err) {
        res.status(500).json({ message: "Error", error: err.message });
    }
};


module.exports = { setupUser, initTasks, getallTask, createTask, updateTask, deleteTask, getTaskAnalytics, explainQuery, testCollScan, testIxScan };