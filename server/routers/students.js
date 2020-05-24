const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students");

router.post("/add", studentController.add);
router.get("/infoOfIdStudent/:idStudent", studentController.infoOfIdStudent);
router.get("/list", studentController.list);
module.exports = router;