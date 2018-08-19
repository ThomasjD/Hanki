const express = require("express");
const router = express.Router();

//this is @route (itself) get req to api/posts/test
//desc: Test posts route
//@access Private route
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
