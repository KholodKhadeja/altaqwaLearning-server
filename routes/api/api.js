const express = require ("express");
const router = express.Router();

const lessonsRouter = require("./lessons");
router.use("/lessons", lessonsRouter);

const usersRouter = require("./users");
router.use("/users", usersRouter);

module.exports=router;