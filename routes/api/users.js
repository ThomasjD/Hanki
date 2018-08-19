const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//now when creating routes... instead of app.get() inside of server.js user router.get()
//Load User model
const User = require("../../models/User");
//for hasing password

//this /test will be equivalent to api/users since its in users file
//this is @route (itself) get req to api/posts/test
//desc: Test post route
//@access public route
router.get("/test", (req, res) => res.json({ msg: "Users works" }));
//private routes need a token so that you send the token along w/ the req

//route for registration
//@route GET api/users/register
//@desc Register user
//@access Public
router.post("/register", (req, res) => {
  //when user tries to register, we need to find if their email is already in the db
  //we search if their email already exists in the mongodb
  //use .then to attach promise w/ mongoose, so you can use callbacks
  User.findOne({ email: req.body.email }).then(user => {
    //when sending data to route through post req.... access it through req.body, email in this case is the name of the form
    //-> this form will ultimately be a form in our react app
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
      //.json({}) sends back an error message
    } else {
      //gravatar.url(1st: email, options)
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" //default -> mm: no profile pic (icon)
      });

      //if there is no user then create user info
      //when creating a resource w/ Mongoose, say new + Modelname
      const newUser = new User({
        name: req.body.name, //this is coming from react form
        email: req.body.email, //this is coming from react form
        avatar, //since avatar: avatar, (same -> ES6 you can shorten it) --> npm i gravatar
        password: req.body.password //this is just plain text --> so we need to encrypt it
        //import bcrypt
      });
      //need to generate a salt  -> genSalt(1. #char we want, 2. call back(err, salt))
      bcrypt.genSalt(10, (err, salt) => {
        //once we get salt back, we can create a hash
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          //hash is what we want to stored in the db (not the plain text)
          if (err) throw err;
          //setting the newUser.password to = hash
          newUser.password = hash;

          //saving newUser using mongoose

          newUser
            .save() //save()n will give us a promise
            .then(user => res.json(user)) // this is sending back a successful response w/ tha tuser
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//@route POST api/users/login
//@desc Login User /Returning JWT Token
//@access Public
router.post("/login", (req, res) => {
  //user will send in a form w/ a email & password
  const email = req.body.email;
  //password in plain text, but password in db is hashed
  const password = req.body.password;

  //Find user by email using mongoose
  User.findOne({ email }) //should be ({email: email}) but w/ ES6 its shorted
    //this gives promise -> .then()
    .then(user => {
      //if it doesn't match this user variable is false
      //if user not in db we need to send message
      if (!user) {
        return res.status(404).json({ email: "User not found" }); //404 is not found error status
      }
      //if user not found, proceed with checking password

      //Check Password

      //use bcrypt() to compare the password vs in hashed (stored in db)
      //1st argument = the password they're using to log in
      //2nd argument = users hash password from the user returned from promise after findOne({email}, (if user exists)
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          //ismatch is T/F promise -> the returned promise of the comparison
          if (isMatch) {
            // if isMatch is true

            //Creating payload: want to put all the info in this payload object that is basiclly all the user info
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }; //we can access user info bec its a promise returned from findOne()
            //any kind of key should be put in the config. file inside of keys.js

            //Sign Token
            //sign() takes in 3 arguments
            //1. payload: (what we want to include in the token) -> this is user info that will get decoded so that it can know what user it is
            //2. keys.secret or key: this is stored in config folder
            //3. expiration object: we know we need to send an expiration if we want it to expire at certain amt of time (in secs) 3600 = 1 hr
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                //will send token or error as a response (can be whatever you want)
                res.json({
                  success: true, //we should get token back if it was a successful login
                  token: "Bearer " + token //format: Bearer is a type of protocol to format the token in the header
                  //we're gonna attach that on to the token, so that we don't have to do it when we actually make the request
                });
              }
            );

            //when you need to change any kind of API key, you should do that win config file

            //res.json({ msg: "Success" });
          } else {
            //if the password & user.password don't match
            return res.status(400).json({ password: "Password incorrect" });
            //these error names are important bec we'll use it in front end, when its sent back to the user
          }
        })
        .catch(err => console.log(err));
    });
});

//@route GET api/users/current
//@desc return the current user (whoever the token belongs to)
//@access Private

//passport.authenticate(1st, 2nd, 3rd)
//1st is strategy 2nd is session 3rd callback ->contains req response
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //ultimately put in the user in here
    //req now contains user.id(this was from the passport jwt_payload) this was from db found by userid

    //res.json({ msg: "Success" });

    //res.json(req.user); // will print out an object of date, id, name, email, avatar, hashed password of user
    //not good idea to include password in res
    //better alternative is to give your object a schema so that it'll ignore password
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
