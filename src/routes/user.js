const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middlewares/verifyAuthToken.js");
const { userController } = require("../controllers/index");

router.get("/get-users", verifyAuthToken, userController.getUsers);

router.get("/get-user", verifyAuthToken, userController.getUser);
router.post("/add-user", verifyAuthToken, userController.addUser);
router.delete("/delete-user", verifyAuthToken, userController.deleteUser);
router.patch("/update-user", verifyAuthToken, userController.updateUser);
router.put("/change-user", verifyAuthToken, userController.changeUser);

module.exports = router;
