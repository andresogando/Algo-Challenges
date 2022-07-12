var express = require("express");
var router = express.Router();
const fetchUsers = require("../tools/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/users", async (req, res, next) => {
  try {
    const { user } = req.query;

    const getUsers = await fetchUsers(user);
    console.log(getUsers)
    res.json(getUsers).status(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
