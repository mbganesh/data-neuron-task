var express = require("express");
var router = express.Router();
var UserModel = require("../model/userSchema");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

router.get("/", function (req, res, next) {
  res.send("User routes");
});

router.get("/get-data", async (req, res, next) => {
  try {
    let data = await UserModel.findOne({});
    console.log(data);
    if (!data) {
      data = [];
    }
    res.json({
      status: true,
      data,
    });
  } catch (err) {
    res.json({
      status: false,
      message: "Err-" + err.message,
    });
  }
});

router.post("/add-item", async (req, res, next) => {
  try {
    const { name } = req.body;
    let storeData = {
      value: name,
      _id: new ObjectId(),
    };
    const isFirst = (await UserModel.countDocuments()) > 0;
    if (isFirst) {
      await UserModel.updateMany(
        {},
        {
          $push: { names: storeData },
          $inc: { addCount: 1 },
        },
        { new: true }
      );
    } else {
      await UserModel.create({
        names: [storeData],
        addCount: 1,
        updateCount: 0,
      });
    }

    const resp = {
      status: true,
      message: "Item Added Successfully",
    };
    res.json(resp);
  } catch (err) {
    res.json({
      status: false,
      message: "Err-" + err.message,
    });
  }
});

router.post("/update-item", async (req, res, next) => {
  try {
    const { _id, name } = req.body;

    await UserModel.findOneAndUpdate(
      { "names._id": new ObjectId(_id) },
      {
        $set: { "names.$.value": name },
        $inc: { updateCount: 1 },
      },
      { new: true }
    );

    const resp = {
      status: true,
      message: "Item Updated Successfully",
    };
    res.json(resp);
  } catch (err) {
    res.json({
      status: false,
      message: "Err-" + err.message,
    });
  }
});
module.exports = router;
