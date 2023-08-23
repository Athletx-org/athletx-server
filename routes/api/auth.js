const express = require('express')
const router = express.Router()

router.post('/register', authControllers.register)

module.exports = router