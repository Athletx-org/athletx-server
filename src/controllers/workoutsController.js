const Workout = require("../models/Workout");
const Training = require("../models/Training");
const Exercise = require("../models/Exercise");
const ExerciseExecution = require("../models/ExerciseExecution");
const ActiveWorkout = require("../models/ActiveWorkout");

async function getAllWorkouts(req, res) {
  Workout.find({ userId: req.params.userId }).then((workout, err) => {
    if (err) {
      console.error("Errore nella query di ricerca:", err);
      return res.status(500).json({ error: "Errore nella query di ricerca" });
    }
    res.json(workout);
  });
}

async function getWorkout(req, res) {
  Workout.findById(req.params.workoutId)
    .populate({
      path: "trainings",
      model: "Training",
      populate: {
        path: "exercises",
        model: "ExerciseExecution",
        populate: {
          path: "exerciseId",
          model: "Exercise",
        },
      },
    })
    .then((workout, err) => {
      if (err) {
        console.error("Errore nella query di ricerca:", err);
        return res.status(500).json({ error: "Errore nella query di ricerca" });
      }
      res.json(workout);
    });
}

async function getCurrentWorkout(req, res) {
  ActiveWorkout.findOne({userId: req.params.userId})
    .then((workout, err) => {
      if (err) {
        console.error("Errore nella query di ricerca:", err);
        return res.status(500).json({ error: "Errore nella query di ricerca" });
      }
      res.json(workout);
    });
}

async function createWorkout(req, res) {
  const data = req.body;

  const workout = await Workout.create({
    name: data.name,
    difficulty: data.difficulty,
    description: data.description,
    duration: data.duration,
    userId: req.params.userId,
  });

  for (const train of data.trainings) {
    const training = await createTraining(workout.id);
    console.log(training.id);
    for (const exercise of train.exercises) {
      await createExerciseExecution(training.id, exercise);
    }
  }
  res.sendStatus(200);
}

async function deleteWorkout(req, res) {
  try {
    const workoutId = req.params.workoutId;

    const workout = await Workout.findById(workoutId);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    const trainingIds = workout.trainings;

    for (const trainingId of trainingIds) {
      const training = await Training.findById(trainingId);

      if (!training) {
        console.log(`Training with ID ${trainingId} not found.`);
        continue;
      }

      const exerciseIds = training.exercises;
      await ExerciseExecution.deleteMany({ _id: { $in: exerciseIds } });
      await Training.findByIdAndRemove(trainingId);
    }
    const deletedWorkout = await Workout.findByIdAndRemove(workoutId);
    if (deletedWorkout) {
      console.log(
        "Workout and associated data deleted successfully:",
        deletedWorkout
      );
      return res.sendStatus(204);
    } else {
      return res.status(404).json({ message: "Workout not found" });
    }
  } catch (err) {
    console.error("Error deleting workout:", err);
    return res.status(500).json({ message: "Error deleting workout" });
  }
}

async function createExerciseExecution(trainingId, exerciseExecution) {
  return ExerciseExecution.create(exerciseExecution).then((execution) => {
    return Training.findByIdAndUpdate(
      trainingId,
      {
        $push: { exercises: execution.id },
      },
      {
        new: false,
        useFindAndModify: true,
      }
    );
  });
}

async function createTraining(workoutId) {
  return Training.create({
    exercises: [],
  }).then((train) => {
    return Workout.findByIdAndUpdate(
      workoutId,
      {
        $push: { trainings: train.id },
      },
      {
        new: false,
        useFindAndModify: true,
      }
    ).then(() => {
      return train;
    });
  });
}

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
};
