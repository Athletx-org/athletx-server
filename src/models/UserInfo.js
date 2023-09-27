const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserInfoSchema = Schema({


  name: {
    type: String,
    required: false,
  },

  surname: {
    type: String,
    required: false,
  },

  height: {
    type: Number,
    required: false,
  },

  city: {
    type: String,
    required: false,
  },

  country: {
    type: String,
    required: false,
  },

  bio: {
    type: String,
    required: false,
  },

  weight: {
    type: Number,
    required: false,
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
