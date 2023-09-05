const Exercise = require("../models/Exercise");

async function getAllExercises(req, res) {
  const exercises = await Exercise.find({});
  if (!exercises) {
    console.error("Errore nella query di ricerca:", err);
    return res.status(500).json({ error: "Errore nella query di ricerca" });
  }
  res.json(exercises);
}

module.exports = {getAllExercises};
