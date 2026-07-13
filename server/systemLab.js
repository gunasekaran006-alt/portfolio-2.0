const EventEmitter = require("events");
const fs = require("fs");
const os = require("os");

// 1) Events Module topics majorly asked in product 

const chatLogs = []; // To save messages
const paymentStatus = { processed: false, message: "Click to Pay" };

// Chat Logs
const chatEvents = new EventEmitter();
chatEvents.on('newMessage', (user, message) => {
    chatLogs.push({ user, message, time: new Date().toLocaleTimeString() });
    // console.log(`New Message from ${user}: ${message}`);
});

// Payment Logic (Razorpay, BHIM, PayPal)
const paymentEvent = new EventEmitter();
// let paymentStatus = { processed: false, message: "Click to Pay" };
paymentEvent.once('processPayment', (amount) => {
    paymentStatus.processed = true;
    paymentStatus.message = `Payment of ${amount} processed successfully!`;
    // console.log(`Payment of ${amount} processed successfully`);
});

// 2) FS Module (File System Logic)
const createEntriFile = () => {
    fs.writeFile("entri.txt", "Hello It's a Entri Live Session", (err) => {
        if (err) {
            console.log("File Creation Failed");
            return;
        }
        console.log("File Operation Successful");
    });
};

// --- 3. OS Module ---
const getOSDetails = () => {
    // Shows dummy data only if NODE_ENV is "production"
    const isProduction = process.env.NODE_ENV === 'production';

    //  (Dummy Data)
    const dummyData = {
        platform: "Portfolio-Cloud-OS",
        type: "Cloud-Server-NT",
        release: "v2.0.0-stable",
        version: "10.0.0.0-stub",
        arch: "x64-virtualized",
        totalMemory: "16.00 GB",
        freeMemory: "8.00 GB",
        uptime: "120.50 Hours",
        network: "Hidden for security compliance"
    };

    //  (Original Data)
    const originalData = {
        platform: os.platform(),
        type: os.type(),
        release: os.release(),
        version: os.version(),
        arch: os.arch(),
        totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",
        freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",
        uptime: (os.uptime() / 3600).toFixed(2) + " Hours",
        network: os.networkInterfaces()
    };

    return isProduction ? dummyData : originalData;
};

module.exports = { chatEvents, paymentEvent, createEntriFile, getOSDetails, chatLogs, paymentStatus };