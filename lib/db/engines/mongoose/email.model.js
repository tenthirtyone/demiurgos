const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emailSchema = new Schema({
  email: { type: String }
});

emailSchema.index({ name: 1 }, { unique: true });

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
