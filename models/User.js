const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
//user collection: name, emaill, password, avatar, date, if gravatr used, then use gravatar email
//gravatar email is via wordpress
//email logic: when email is inserted it will hit the avatar server, if there is an avatar, then it will put that image into the
//avatar field, if not a placeholder will be put in placed
//default date put in automatically
//Date.now -> current time stamp

const UserSchema = new Schema({
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
    //required true ..........don't put this as true bec the avatar is getting stored via the email
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//model(): 1st argument = name we want to use 2nd argument = actual schema
module.exports = User = mongoose.model("users", UserSchema);
