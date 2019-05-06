const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create User collection
const UserCollection = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model("users", UserCollection);
