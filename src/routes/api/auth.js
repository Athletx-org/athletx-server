const express = require("express");
const router = express.Router();
const authControllers = require("../../controllers/authController");
// const authenticate = require("../../middleware/authJwt");

router.post("/registerAthlete", authControllers.registerAthlete);
router.post("/registerInstructor", authControllers.registerInstructor);
router.post("/loginInstructor", authControllers.loginInstructor);
router.post("/loginAthlete", authControllers.loginAthlete);
router.post("/logoutAthlete", authControllers.logoutAthlete); 
router.post("/logoutInstructor", authControllers.logoutInstructor); 
router.get("/userInfo", /*authenticate,*/ authControllers.athleteInfo);
module.exports = router;
