const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/authController");
const authenticate = require("../../middleware/authJwt");

router.post("/signup", authControllers.signup);
router.post("/login", authControllers.login);
router.post("/logout", authControllers.logout); 
router.get("/userInfo", authenticate, authControllers.athleteInfo);
module.exports = router;
