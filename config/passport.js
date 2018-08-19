//only way this i sgoing to be used if we specify it on a certain route (one that is protected... make one in users.js)
const JwtStrategy = require("passport-jwt").Strategy;

const ExtractJwt = require("passport-jwt").ExtractJwt; // enable extraction of payload (user data)
//bring in mongoose bec we'll be searching for the user that comes w/ payload
const mongoose = require("mongoose");
const User = mongoose.model("users");
//users comes from our model
//model(): 1st argument = name we want to use 2nd argument = actual schema
//module.exports = User = mongoose.model("users", UserSchema);

/*
-bring in JwtStrategy
-ExtractJwt: extract payload (user info)
-specify Bearer token 
-add key 
-pass JwtStrategy through passport 
	-inside JwtStrategy (have callback function)
		-callback() has payload (user data)
-> then use that data to find user & validate it
*/

//bring keys bec it has has our secret(its sent along the req so we need to validate that)
const keys = require("../config/keys");

const opts = {}; //this object will eventually contain token & secretkey
//fromAuthHeaderAsBearerToken(): meta function
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = keys.secretOrKey;

//passport passed in as a middleware in server.js (it requires this file to work)
module.exports = passport => {
  //this will be needed in server.js as middleware

  //passport is a parameter, in ES6 does not require () if its only 1 parameter
  //jwt_payload: is the object from users.js
  /*const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }*/
  passport.use(
    //the only way for this to be used if its specified on certain routes
    //pass in new strategy w/ our,options
    new JwtStrategy(opts, (jwt_payload, done) => {
      //callback will include payload
      //console.log(jwt_payload);

      User.findById(jwt_payload.id) //jwt_payload has the id in it
        //will give us a promise
        .then(user => {
          if (user) {
            //if user has been found -> want to return done function
            //2 parameters in done(): 1) error (if there is error) 2) actual user

            return done(null, user);
          }
          return done(null, false); //fale this time bec this is case where there is no user(that met the payload.id)
        })
        .catch(err => console.log(err));
    })
  );
};

/*const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }*/
