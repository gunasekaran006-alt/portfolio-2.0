const express = require("express");
const router = express.Router();
const taskController = require("../controller/tasks.controller");

console.log("Task Controller:", taskController);

router.post("/create", taskController.createTask);
router.post("/setup-user", taskController.setupUser);
router.post("/init-tasks", taskController.initTasks);


module.exports = router;