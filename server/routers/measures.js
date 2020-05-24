const express = require("express");
const router = express.Router();
const measureController = require("../controllers/measures");

router.post("/add", measureController.add);
router.get("/list", measureController.list);
router.get("/listIdMeasure", measureController.listIdMeasure);
router.get("/infoOfIdStudent/:idStudent", measureController.infoOfIdStudent);
module.exports = router;