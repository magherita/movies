const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create User collection
const VisitorCollection = new Schema({
  email: {
    type: String,
    required: true
  },
  visits: {
    type: Number
  },
  loggedIn: {
    type: Date,
    default: Date.now
  },
  loggedOut: {
    type: Date
  }
});

module.exports = Visitor = mongoose.model("visitors", VisitorCollection);
