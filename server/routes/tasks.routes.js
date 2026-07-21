const express = require("express");
const router = express.Router();
const taskController = require("../controller/tasks.controller");

console.log("Task Controller:", taskController);



router.get("/analytics", taskController.getTaskAnalytics);
router.post("/create", taskController.createTask);
router.post("/setup-user", taskController.setupUser);
router.post("/init-tasks", taskController.initTasks);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);


router.get("/", taskController.getallTask);
router.get("/explain-query", taskController.explainQuery);
router.get("/test-collscan", taskController.testCollScan);
router.get("/test-ixscan", taskController.testIxScan);

module.exports = router;