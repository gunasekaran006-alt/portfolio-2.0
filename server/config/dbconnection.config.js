const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        // console.log("Checking DB URL:", process.env.dbport/atlas);
        await mongoose.connect(process.env.atlasport);
        console.log("Connected to MongoDB Atlas:", mongoose.connection.name);
    } catch(err) {
        console.error("Database Connection Failed:", err);
        process.exit(1);
    }
};

module.exports = dbConnection;