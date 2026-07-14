const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        // console.log("Checking DB URL:", process.env.dbport);
        await mongoose.connect(process.env.dbport);
        console.log("Connected to DB:", mongoose.connection.name);
    } catch(err) {
        console.error("Database Connection Failed:", err);
        process.exit(1);
    }
};

module.exports = dbConnection;