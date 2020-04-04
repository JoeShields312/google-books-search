const path = require("path");
const router = require("express").Router();
const ApiRoutes = require("./Api/index.js");

// API Routes
router.use("/Api", ApiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;