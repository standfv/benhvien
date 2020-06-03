const STUDENT = require("../models/students");
module.exports.add = (req, res) => {
  let NEW_STUDENT = new STUDENT(req.body);
  NEW_STUDENT.save(error => {
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
    let datas = await STUDENT.find()
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

module.exports.infoOfIdStudent = async (req, res) => {
  try {
    let datas = await STUDENT.findOne({ _id: req.params.idStudent })
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
