const express = require("express");
const app = express();
const systemLab = require("./SystemLab");

let port = 8080;

// OS Details Route
app.get("/os-status", (req, res) => {
    const details = systemLab.getOSDetails();
    res.json(details);
});

app.get("/create-file", (req, res) => {
    systemLab.createEntriFile();
    res.json({ message: "File 'entri.txt' has been created. Check your server folder." });
});

app.get("/test-events", (req, res) => {
    // Chat Scenario
    systemLab.chatEvents.emit('newMessage', 'Narasimhan', 'Kindly join the session');
    systemLab.chatEvents.emit('newMessage', 'Guna', 'Joining sir');

    // Payment Scenario
    console.log("User clicked the pay button");
    systemLab.paymentEvent.emit('processPayment', 5000);

    console.log("User clicked the pay button again");
    systemLab.paymentEvent.emit('processPayment', 5000); // இது இக்னோர் செய்யப்படும்

    res.json({ message: "Events logic executed. Check your server terminal." });
});

app.listen(port, () => {
    console.log("Server running on", port);
});