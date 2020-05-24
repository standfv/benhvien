var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'students' },
  measures: {
    height: { type: Number, default: null },
    weight: { type: Number, default: null },
    bmi: { type: Number, default: null }
  },
  createAt: { type: Number, default: Date.now() }
});
module.exports = mongoose.model("measures", mSchema);