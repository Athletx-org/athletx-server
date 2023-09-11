const express = require("express");
const router = express.Router({ mergeParams: true });
const userController = require("../../controllers/userController");
const authenticate = require("../../middleware/authJwt");

router.get("/info/:userId", authenticate, userController.getUserInfo);


module.exports = router;
