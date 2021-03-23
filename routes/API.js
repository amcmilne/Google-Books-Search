const router = require("express").Router();
const axios = require("axios");
const GoogleBooks  = require("../models/GoogleBooks");


router.get("/api/books", (req, res) => {
  GoogleBooks.findAll(req.query)
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/search", (req, res) => {
//   let bookTitle = req.body.title.replace(/\s/g, "+");
//   axios
//     .get(
//       `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${APIkey}`
//     )
//     .then((response) => {
//       res.json(response.data.items);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.post("/api/books", (req, res) => {   
  GoogleBooks.create(req.body)
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      res.status(422).json(err);
    });
});

router.get("/api/books/:id", (req, res) => {
  GoogleBooks.findOne({ id: req.params.id })
    .then((dbModel) => {
      res.json(dbModel);
    })
    .catch((err) => {
      res.status(420).json(err);
    });
});

router.get("/api/books/:id", (req, res) => {
  GoogleBooks.findById({ _id: req.params.id }).then((dbModel) => {
    dbModel
      .remove()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => {
        res.status(420).json(err);
      });
  });
});
module.exports = router;
