const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

router
    .route("/google/:input")
    .get(booksController.getGoogleBooks);

module.exports = router;