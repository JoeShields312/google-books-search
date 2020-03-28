const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  id: {
    type: String || Number,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  publishedDate: {
    type: Date,
    default: Date.now
  }
});
booksSchema.index({
    id: 1,
}, {
    unique: true
}); 

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
