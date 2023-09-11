const UserInfo = require("../models/UserInfo");

async function getUserInfo(req, res) {
  UserInfo.findOne({ userId: req.params.userId }).then((userInfo, err) => {
    if (err) {
      console.error("Errore nella query di ricerca:", err);
      return res.status(500).json({ error: "Errore nella query di ricerca" });
    }
    res.json(userInfo);
  });
}

module.exports = {
  getUserInfo,
};
