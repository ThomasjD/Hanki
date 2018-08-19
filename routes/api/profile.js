const express = require("express");
const router = express.Router();

//this is @route (itself) get req to api/profile/test
//desc: Test post route
//@access Private route
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
