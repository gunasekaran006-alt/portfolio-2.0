const express = require("express");
const cors = require('cors');
const app = express();
const systemLab = require("./SystemLab");
const productRoutes = require("./routes/products.routes");
const employeeRoutes = require("./routes/employee.routes");

// Middleware
app.use(express.json()); // JSON parsing is mandatory!
app.use(cors());

// Routes
app.use("/api/products", productRoutes);
app.use("/employees", employeeRoutes);

let port = 8080;

// System Routes
// OS Details Route
app.get("/os-status", (req, res) =>
    // const details = systemLab.getOSDetails();
    // res.json(details);
    res.json(systemLab.getOSDetails()));

app.get("/create-file", (req, res) => {
    systemLab.createEntriFile();
    res.json({ message: "File 'entri.txt' has been created!" });
});


// Chat Route
app.get("/send-chat", (req, res) => {
    systemLab.chatEvents.emit('newMessage', 'Narasimhan', 'Kindly join the session');
    systemLab.chatEvents.emit('newMessage', 'Guna', 'Joining sir');
    res.json({ logs: systemLab.chatLogs });
});

// Payment Route
app.get("/process-payment", (req, res) => {
    if (systemLab.paymentStatus.processed) {
        res.json({ message: "Already Paid!" });
    } else {
        systemLab.paymentEvent.emit('processPayment', 5000);
        res.json({ message: systemLab.paymentStatus.message });
    }
});



// console.log("User clicked the pay button");
// systemLab.paymentEvent.emit('processPayment', 5000);

// console.log("User clicked the pay button again");
// systemLab.paymentEvent.emit('processPayment', 5000); 

// res.json({ message: "Events logic executed. Check your server terminal." });

// res.json({ chatHistory: systemLab.chatLogs, paymentInfo: systemLab.paymentStatus });


app.get("/reset-payment", (req, res) => {
    systemLab.paymentStatus.processed = false;
    systemLab.paymentStatus.message = "Click to Pay";
    res.json({ message: "Reset complete! You can pay again." });
});




app.listen(port, () => {
    console.log("Server running on", port);
});