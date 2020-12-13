const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/books"
router.route("/")
  .get(eventController.findAll)
//  .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
