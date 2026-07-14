// let users = [];
// module.exports = users;

// server/models/users.models.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model("users", userSchema); 
module.exports = User;