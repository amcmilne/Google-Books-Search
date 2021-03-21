const router = require("express").Router();
const gbController = require("../../controllers/gbController");

// Matches with "/api/books"
router.route("/")
  .get(GBcontroller.findAll)
  .post(GBcontroller.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(gbController.findOne)
  .delete(gbController.remove);

module.exports = router;