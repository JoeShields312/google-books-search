require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// connect to MongoDB
const MONGODB_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds347665.mlab.com:47665/heroku_00fjp6g3`
console.log(MONGODB_URI)
mongoose.connect("mongodb://localhost/google-books-search", {
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});