const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .post(userController.findName)

module.exports = router;
