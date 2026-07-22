const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ["not-started", "in-progress", "completed"],
        default: "not-started",
        index: true
    }
});

module.exports = mongoose.model("tasks", taskSchema);