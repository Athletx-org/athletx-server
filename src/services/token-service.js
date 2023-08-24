const jwt = require("jsonwebtoken");
const config = require("../config/auth");

const secret = config.secret;
const tokenDuration = process.env.JWT_DURATION || "30d";

function generateToken(user) {
  return new Promise(function (resolve, reject) {
    const jwtPayload = {
      uid: user._id,
    };
    const jwtOptions = {
      expiresIn: tokenDuration,
      algorithm: "HS256",
    };
    jwt.sign(jwtPayload, secret, jwtOptions, function (err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

function validateToken(token) {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        resolve({
          success: false,
          errorMessage: err.message,
        });
      } else {
        resolve({
          success: true,
          userId: decoded.uid,
        });
      }
    });
  });
}

module.exports = { validateToken, generateToken };
