const bcrypt = require("bcrypt");
const Athlete = require("../models/Athlete");
const Instructor = require("../models/Instructor");

async function registerAthlete(req, res) {
  await registerUser(req, res, Athlete);
}

async function registerInstructor(req, res) {
  await registerUser(req, res, Instructor);
}


async function loginAthlete(req, res) {
  await authenticateUser(req, res, Athlete);
}

async function loginInstructor(req, res) {
  await authenticateUser(req, res, Instructor);
}

async function registerUser(req, res, User) {
  const {
    email,
    name,
    surname,
    height,
    weight,
    birthdate,
    gender,
    password,
    password_confirm,
  } = req.body;

  if (
    !email ||
    !name ||
    !surname ||
    (!height && User === Athlete) ||
    (!weight && User === Athlete) ||
    !birthdate ||
    !gender ||
    !password ||
    !password_confirm
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  if (password !== password_confirm) {
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
      name,
      surname,
      height,
      weight,
      birthdate,
      gender,
      password: hashedPassword,
    });

    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).json({ message: "Could not register" });
  }
}

async function authenticateUser(req, res, User) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: 'Invalid fields' });
  }

  const user = await User.findOne({ email }).exec();

  if (!user) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: 'Email or password is incorrect' });
  }

  return res.sendStatus(200);
}

module.exports = { registerAthlete, registerInstructor, loginAthlete, loginInstructor };
