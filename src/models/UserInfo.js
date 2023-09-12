const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserInfoSchema = Schema({


  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  
  profilePic: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("UserInfo", UserInfoSchema, "usersInfo");
