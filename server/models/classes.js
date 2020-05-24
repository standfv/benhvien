var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mSchema = new Schema({
  name: { type: String, default: null },
  shape: { type: Schema.Types.ObjectId, ref: 'shapes' },
  createAt: { type: Number, default: Date.now() }
});
module.exports = mongoose.model("classes", mSchema);