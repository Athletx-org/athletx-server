const bcrypt = require("bcrypt");
const User = require("../models/User");
const UserInfo = require("../models/UserInfo"); 
const tokenService = require("../services/token-service");

async function signup(req, res) {
  const {
    email,
    password,
    confirmPassword,
  } = req.body;

  console.log(req.body)

  if (
    !email ||
    !password ||
    !confirmPassword
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ message: "Passwords do not match" });
  }

  const userExists = await User.exists({ email }).exec();
  if (userExists) {
    return res.sendStatus(409);
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Could not register" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(401).json({ message: "Email or password is incorrect" });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: "Email or password is incorrect" });
  }

  tokenService
    .generateToken(user)
    .then((token) => {
      user.token = token;
    })
    .catch((error) => {
      console.log(error);
      return res.sendStatus(400);
    });

  await user.save();
  return res.json({ user: user });
}

async function logout(req, res) {
  const body = req.body;
  const email = body.email;
  await User.findOneAndUpdate(
    { email: email },
    { token: null}
    ).exec();
  res.sendStatus(204);
}

module.exports = {
  login,
  signup,
  logout,
};
