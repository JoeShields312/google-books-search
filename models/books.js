const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  googleId: {
    type: String || Number,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: Image || String
  },
  link: {
    type: URL || String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
booksSchema.index({
    googleId: 1,
}, {
    unique: true
}); 

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
