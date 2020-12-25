const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const tagController = require("../../controllers/tagController");
// Matches with "/api/books"
router.route("/")
  .get(eventController.findAll)
  .post(eventController.findAll);

router.route("/:id")
  .get(eventController.findOne)

router.route("/delete")
  .post(eventController.delete);

router.route("/create")
  .post(eventController.create);

router.route("/updateTags")
    .post(tagController.updateTags);

module.exports = router;
