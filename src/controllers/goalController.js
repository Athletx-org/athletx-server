const Goal = require("../models/Goal");
const ObjectId = require('mongoose').Types.ObjectId;


async function getAllGoals(req, res) {
  const goals = await Goal.find({ userId: req.params.userId });
  res.json(goals);
}

async function createNewGoal(req, res) {
  const data = req.body;
  await Goal.create({
    text: data.text,
    expiration: data.expiration,
    achieved: data.achieved,
    userId: req.params.userId,
  });

  res.sendStatus(200);
}

async function setGoalAsAchieved(req, res) {
  await Goal.updateOne(
    { _id: new ObjectId(req.params.goalId) }, // Filtra il documento in base all'ID
    { $set: { achieved: true } }
  );
  res.sendStatus(200);
}
module.exports = { getAllGoals, createNewGoal, setGoalAsAchieved };
