var express = require("express");
var router = express.Router();
var UserModel = require("../model/userSchema");

router.get("/", function (req, res, next) {
  res.send("User routes");
});

router.get("/get-count", async (req, res, next) => {
  try {
    let data = await UserModel.findOne({});
    console.log(data);
    res.json({
      status: true,
      data: data,
    });
  } catch (err) {
    res.json({
      status: true,
      message: "Err-" + err.message,
    });
  }
});

router.post("/add-item", async (req, res, next) => {
  try {
    let { name } = req.body;
    console.log(name, "name");

    const updatedData = await UserModel.findByIdAndUpdate(
      {},
      {
        $push: { names: name },
        $inc: { addCount: 1 },
      },
      { new: true }
    );

    let resp = {
      status: true,
      message: "Item Added Successfully",
      data: updatedData,
    };
    console.table(resp);
    res.json(resp);
  } catch (err) {
    res.json({
      status: true,
      message: "Err-" + err.message,
    });
  }
});

module.exports = router;
