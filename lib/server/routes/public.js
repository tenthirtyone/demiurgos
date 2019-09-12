const express = require("express");
const router = express.Router();

router.use("/", express.static("./public"));

router.post("/signup", async (req, res) => {
  const db = req.app.get("db");

  const email = req.body;
  await db.saveEmail(email);
  res.send(email);
});

module.exports = router;
