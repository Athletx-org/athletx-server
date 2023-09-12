const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../../controllers/userController");
const authenticate = require("../../middleware/authJwt");
const upload = require('../../middleware/multer')

router.get("/info/:userId", authenticate, userController.getUserInfo);
router.patch("/info/:userId", authenticate, upload.single('profilePic'), userController.updateUserInfo)

module.exports = router;
