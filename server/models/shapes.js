var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mSchema = new Schema({
  name: { type: String, default: null },
  createAt: { type: Number, default: Date.now() }
});
module.exports = mongoose.model("shapes", mSchema);