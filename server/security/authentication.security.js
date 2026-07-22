// server/security/authentication.security.js
const userModel = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// // step 1:
// // 1. Register API (MongoDB + Bcrypt Hashing)
// const registerApi = (req, res) => {
//     const { username, email, password } = req.body;
//     const userExists = userModel.find(data => data.email === email);

//     if (userExists) {
//         return res.status(400).json({ message: "User account exists" });
//     }

//     const loginPin = Math.floor(1000 + Math.random() * 9000);
//     const newUser = {
//         id: Date.now().toString(),
//         username,
//         email,
//         password,
//         loginPin
//     };
//     userModel.push(newUser);
//     // console.log("Generated PIN:", loginPin);
//     console.log("DEBUG: Generated Login PIN for", email, "is:", loginPin);
//     res.status(201).json({ message: "User Registration Successful", loginPin: loginPin });
// };

// const loginApi = (req, res) => {
//     const { email, password } = req.body;
//     const pin = req.headers.pin;

//     if (!pin) {
//         return res.status(400).json({ message: "Login Pin is required in headers" });
//     }

//     const user = userModel.find(data => data.email === email && data.password === password);

//     if (!user) {
//         return res.status(401).json({ message: "Invalid Credentials" });
//     }

//     if (Number(pin) !== user.loginPin) {
//         return res.status(401).json({ message: "Invalid Login Pin" });
//     }

//     res.status(200).json({ message: "Welcome back", name: user.username });
// };

// module.exports = { registerApi, loginApi };


// part:2
// server/security/authentication.security.js
// 1. Register API (MongoDB + Bcrypt Hashing)
const registerApi = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists in MongoDB
        const userExists = await userModel.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User account exists" });
        }

        // Hash the password securely using bcrypt (10 rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user in Database
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        console.log("DEBUG: User registered successfully:", email);

        // Send safe response (Never return password)
        res.status(201).json({ 
            message: "User Registration Successful", 
            user: { username: newUser.username, email: newUser.email } 
        });

    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ message: "User account creation failed", error: err.message });
    }
};

// 2. Login API (MongoDB + Bcrypt Compare + JWT Token)
const loginApi = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email in MongoDB
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User account not found" });
        }

        // Compare entered password with hashed password in DB
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid Password" });
        }

        // Generate JWT Token (Valid for 24 hours)
        const token = jwt.sign(
            { userId: user._id, username: user.username, email: user.email },
            process.env.jwt_secret,
            { expiresIn: '24h' }
        );

        console.log("DEBUG: User logged in successfully:", email);

        res.status(200).json({ 
            message: "Login Successful", 
            token: token,
            username: user.username 
        });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "User login failed", error: err.message });
    }
};

module.exports = { registerApi, loginApi };