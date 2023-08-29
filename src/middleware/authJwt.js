const tokenService = require("../services/token-service");

function authenticate(req, res, next) {
  console.log("middleware")
  let token = req.cookies.auth;
  if (!token) {
    return res.status(401).json({
      error: "Missing auth token in the request.",
    });
  }
  tokenService.validateToken(token)
    .then((result) => {
      if (result.success) {
        console.log("Token is valid. User ID:", result.userId);
        next()
      } else {
        console.error("Token validation failed:", result.errorMessage);
      }
    })
    .catch((error) => {
      console.error("Error during token validation:", error);
    });
}

module.exports = authenticate
