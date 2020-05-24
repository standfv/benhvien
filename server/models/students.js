var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mSchema = new Schema({
  classx: { type: String, default: null },
  shape: { type: String, default: null },
  name: { type: String, default: null },
  gender: { type: String, default: null },
  birthday: { type: String, default: null },
  createAt: { type: Number, default: Date.now() }
});
module.exports = mongoose.model("students", mSchema);