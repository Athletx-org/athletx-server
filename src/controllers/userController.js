const UserInfo = require('../models/UserInfo')
const Improvement = require('../models/Improvement')

async function getUserInfo (req, res) {
  UserInfo.findOne({ userId: req.params.userId }).then((userInfo, err) => {
    if (err) {
      console.error('Errore nella query di ricerca:', err)
      return res.status(500).json({ error: 'Errore nella query di ricerca' })
    }
    res.json(userInfo)
  })
}

async function updateUserInfo (req, res) {
  const data = req.body
  await UserInfo.findOneAndUpdate(
    { userId: req.params.userId },
    {
      name: data.name,
      surname: data.surname,
      height: data.height,
      age: data.age,
      city: data.city,
      country: data.country,
      bio: data.bio,
      profilePic: '/uploads/' + req.params.userId
    },
    {
      new: true,
      upsert: true
    }
  )
  res.sendStatus(204)
}

async function addUserImprovement (req, res) {
  const data = req.body
  await Improvement.create({
    timeStamp: data.timeStamp,
    userId: req.params.userId,
    bodyWeight: data.bodyWeight,
    bodyFat: data.bodyFat,
    biceps: data.biceps,
    chest: data.chest,
    quadriceps: data.quadriceps
  })
  res.sendStatus(204)
}

async function getUserImprovement (req, res) {
  Improvement.findOne({ userId: req.params.userId })
    .sort({ timeStamp: -1 })
    .then((improvement, err) => {
      if (err) {
        console.error('Errore nella query di ricerca:', err)
        return res.status(500).json({ error: 'Errore nella query di ricerca' })
      }
      res.json(improvement)
    })
}

module.exports = {
  getUserInfo,
  updateUserInfo,
  addUserImprovement,
  getUserImprovement
}
