const Athlete = require("../models/Athlete");
const bcrypt = require("bcrypt");

async function registerAthlete(req, res) {
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
    !weight ||
    !height ||
    !birthdate ||
    !gender ||
    !password ||
    !password_confirm
  ) {
    return res.status(422).json({ message: "Invalid fields" });
  }

  if (password !== password_confirm)
    return res.status(422).json({ message: "Passwords do not match" });

  const userExists = await Athlete.exists({ email }).exec();

   if (userExists) return res.sendStatus(409);

  try {
    hashedPassword = await bcrypt.hash(password, 10);

    await Athlete.create({
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

module.exports = { registerAthlete };
