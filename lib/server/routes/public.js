const express = require("express");
const router = express.Router();

router.use("/", express.static("./public"));

router.post("/signup", async (req, res) => {
  const db = req.app.get("db");

  const email = req.body;
  try {
    await db.saveEmail(email);
  } catch (e) {
    return res.status(404).send();
  }

  return res.send(email);
});

module.exports = router;
