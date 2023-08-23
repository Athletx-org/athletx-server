const express = require('express')
const router = express.Router()
const authControllers = require('../../controllers/authController')


router.post('/registerAthlete', authControllers.registerAthlete)
router.post('/registerInstructor', authControllers.registerInstructor)
router.post('/loginInstructor', authControllers.loginInstructor)
router.post('/loginAthlete', authControllers.loginAthlete)

module.exports = router