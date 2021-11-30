const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middlewares/verifyAuthToken.js");
const { getUser } = require("../controllers/user/index");

router.get("/get-user", verifyAuthToken, getUser);

module.exports = router;
