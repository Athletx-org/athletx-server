const UserInfo = require('../models/UserInfo')

async function getUserInfo (req, res) {
  UserInfo.findOne({ userId: req.params.userId }).then((userInfo, err) => {
    if (err) {
      console.error('Errore nella query di ricerca:', err)
      return res.status(500).json({ error: 'Errore nella query di ricerca' })
    }
    res.json(userInfo)
  })
}

async function updateUserInfo(req, res) {
  const data = req.body
  await UserInfo.findOneAndUpdate(
    { userId: req.params.userId },
    {
      name: data.name,
      surname: data.surname,
      height: data.height,
      weight: data.weight,
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

module.exports = {
  getUserInfo,
  updateUserInfo
}
