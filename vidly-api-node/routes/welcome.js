const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
  // OR: res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
