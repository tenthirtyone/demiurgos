const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  password: { type: String }
});

userSchema.index({ name: 1 }, { unique: true });

const Team = mongoose.model('User', userSchema);

module.exports = Team;
