const router = require("express").Router();
const { signUp, logIn } = require("../controllers/user");
router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
