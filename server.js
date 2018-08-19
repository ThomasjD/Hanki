const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Body parser middleware (required so that you can get acced of req.body.xxx (in the routes ex. post req for registering))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//landing page
//app.get("/", (req, res) => res.send("hello"));

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB to mongoose
//since we're using promise, we use then() & catch(err)
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Hey Thomas....MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware -> aunthetication module & making routes private
app.use(passport.initialize());
require("./config/passport")(passport);
//The way to use passport requires a strategy depending on if its jwt, google, or local (goes in the Config file)
//our jwt strategy will go into the config folder config.js file
//Passport Config inside of config folder

//Use these routes defined in header
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//define which port to listen for
//process.env.PORT is for when deploying to heroku
const port = process.env.PORT || 5000;

//Use listen() from express() to the specified port that we defined & tell us which port its running on
app.listen(port, () => console.log(`listening on port ${port}`));
