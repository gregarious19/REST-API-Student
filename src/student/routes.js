const { Router } = require("express");
const express = require("express");
const { getStudents, addStudents, removeStudents } = require("./controller.js");

const router = Router();
router.use(express.json());

router.get("/", getStudents);
router.post("/", addStudents);
router.delete("/", removeStudents);

module.exports = router;
