const router = require("express").Router()
const userController = require("../controller/user.controller")

router.post("/Register", userController.register);
router.post("/Login", userController.login);

module.exports = router
