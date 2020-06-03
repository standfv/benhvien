const MEASURE = require("../models/measures");
module.exports.add = (req, res) => {
  let NEW_MEASURE = new MEASURE(req.body);
  NEW_MEASURE.save(error => {
    if (error) {
      res.json({
        message: "error"
      });
    } else {
      res.json({
        message: "success"
      });
    }
  });
};

module.exports.list = async (req, res) => {
  try {
    let datas = await MEASURE.find()
      .lean()
      .exec();
    res.json({
      message: "success",
      results: datas
    });
  } catch (error) {
    res.json({
      message: "error"
    });
  }
};

module.exports.listIdMeasure = async (req, res) => {
  try {
    let datas = await MEASURE.find({})
      .select("-_id student")
      .exec();
    res.json({
      message: "success",
      results: datas
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error"
    });
  }
};
module.exports.infoOfIdStudent = async (req, res) => {
  try {
    let datas = await MEASURE.findOne({ student: req.params.idStudent })
      .sort({ createAt: -1 })
      .lean()
      .exec();
    res.json({
      message: "success",
      results: datas
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "error"
    });
  }
};
