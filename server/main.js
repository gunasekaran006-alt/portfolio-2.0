/* 
   Server Entry Point: 
   Injecting a simple Root Route to verify backend connection 
*/

const express = require("express");
const app = express();

let port = 8080;

// Root route to verify the connection
app.get("/", (req, res) => {
    res.json({ 
        status: "success", 
        message: "Portfolio Backend is running successfully!" 
    });
});

app.listen(port, () => {
    console.log("Server running on", port);
});