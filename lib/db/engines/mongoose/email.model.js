const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  email: { type: String }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
