const router = require("express").Router();
const booksController = require("../../controller/booksController");
// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/google")
  .get(booksController.getGoogleBooks);

router
  .route("/:_id")
  .delete(booksController.remove);


module.exports = router;