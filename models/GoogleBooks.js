const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, require: true },
  title: { type: String, require: true },
  authors: [{ type: String, require: true }],
  listPrice: [{ type: String, require: false }],
  retailPrice: [{ type: String, require: false }],
  publisher: [{ type: String, require: false }],
  image: { type: String, unique: true, dropDups: true },
});

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;
