const router = require("express").Router();
const eventController = require("../../controllers/eventController");
const tagController = require("../../controllers/tagController");
// Matches with "/api/books"
router.route("/")
  .get(eventController.findAll);

  router.route("/create")
    .post(eventController.create);
//  .post(booksController.create);
  router.route("/updateTags")
    .post(tagController.updateTags);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
