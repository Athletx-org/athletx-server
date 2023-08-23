const express = require('express')
const router = express.Router()
const authControllers = require('../../controllers/authController')


router.post('/registerAthlete', authControllers.registerAthlete)
router.post('/registerInstructor', authControllers.registerInstructor)

module.exports = router