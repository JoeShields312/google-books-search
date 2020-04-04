const router = require("./node_modules/express").Router();

const path = require("path")
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  
module.exports = router;