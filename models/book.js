const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // description: String,
  // publisher: String,
  // publishedDate: Date,
  title: { type: String, required: true },
  authors: { type: Array },
  canonicalVolumeLink: String,
  imageLinks: { thumbnail: String },
  publisher: String,
  publishedDate: Date,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
