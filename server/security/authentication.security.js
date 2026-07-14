// server/security/authentication.security.js
const userModel = require("../models/users.models");

const registerApi = (req, res) => {
    const { username, email, password } = req.body;
    const userExists = userModel.find(data => data.email === email);

    if (userExists) {
        return res.status(400).json({ message: "User account exists" });
    }

    const loginPin = Math.floor(1000 + Math.random() * 9000);
    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        loginPin
    };
    userModel.push(newUser);
    // console.log("Generated PIN:", loginPin);
    console.log("DEBUG: Generated Login PIN for", email, "is:", loginPin);
    res.status(201).json({ message: "User Registration Successful", loginPin: loginPin });
};

const loginApi = (req, res) => {
    const { email, password } = req.body;
    const pin = req.headers.pin;

    if (!pin) {
        return res.status(400).json({ message: "Login Pin is required in headers" });
    }

    const user = userModel.find(data => data.email === email && data.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    if (Number(pin) !== user.loginPin) {
        return res.status(401).json({ message: "Invalid Login Pin" });
    }

    res.status(200).json({ message: "Welcome back", name: user.username });
};

module.exports = { registerApi, loginApi };