const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const tagController = require("../../controllers/tagController");

router.route("/")
  .post(tagController.findAll);

  router.route("/updateTags")
    .post(tagController.updateTags);

module.exports = router;
