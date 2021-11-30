const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middlewares/verifyAuthToken.js");
const { postController } = require("../controllers/index");

router.get("/get-posts", verifyAuthToken, postController.getPosts);

router.get("/get-post", verifyAuthToken, postController.getPost);
router.post("/add-post", verifyAuthToken, postController.addPost);
router.delete("/delete-post", verifyAuthToken, postController.deletePost);
router.patch("/update-post", verifyAuthToken, postController.updatePost);
router.put("/change-post", verifyAuthToken, postController.changePost);

module.exports = router;
