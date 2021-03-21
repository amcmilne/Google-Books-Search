const router = require("express").Router();
const googleBooksRoutes = require("./googleBooks");


router.use("/googleBooks", googleBooksRoutes);

module.exports = router;