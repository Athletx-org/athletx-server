const Goal = require("../models/Goal");

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

  res.sendStatus(204);
}

async function setGoalAsAchieved(req, res) {
  await Goal.findOneAndUpdate(
    { _id: req.params.goalId },
    { achieved: true }
  )
  res.sendStatus(204);
}
module.exports = { getAllGoals, createNewGoal, setGoalAsAchieved };
