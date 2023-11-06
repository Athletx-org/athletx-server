const tokenService = require('../services/token-service')

function authenticate (req, res, next) {
  let token = req.headers['x-access-token']
  if (!token) {
    return res.status(401).json({
      error: 'Missing auth token in the request.'
    })
  } else {
    tokenService
      .validateToken(token)
      .then(result => {
        if (result.success) {
          next()
        } else {
          console.error('Token validation failed:', result.errorMessage)
        }
      })
      .catch(error => {
        console.error('Error during token validation:', error)
      })
  }
}

module.exports = authenticate;
