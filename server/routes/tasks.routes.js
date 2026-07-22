const express = require("express");
const router = express.Router();
const taskController = require("../controller/tasks.controller");
const authMiddleware = require("../middleware/authz.middleware");

// console.log("Task Controller:", taskController);


// 2 : Public / Utility Routes
router.get("/analytics", taskController.getTaskAnalytics);
router.post("/setup-user", taskController.setupUser);
router.post("/init-tasks", taskController.initTasks);
router.get("/explain-query", taskController.explainQuery);
router.get("/test-collscan", taskController.testCollScan);
router.get("/test-ixscan", taskController.testIxScan);


// 2 : Protected Routes (Protected by JWT middleware)
router.get("/", authMiddleware, taskController.getallTask);
router.post("/create", authMiddleware, taskController.createTask); // /create or / can be used
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);


module.exports = router;