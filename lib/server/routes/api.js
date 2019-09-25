const router = require("express").Router();

router.get("/", async (req, res) => {
  return res.status(404).send();
});

module.exports = router;
