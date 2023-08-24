const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const tokenService = require("../services/token-service");

function authenticate(req, res, next) {
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
      } else {
        console.error("Token validation failed:", result.errorMessage);
      }
    })
    .catch((error) => {
      console.error("Error during token validation:", error);
    });
    next()
}

module.exports = {authenticate}
