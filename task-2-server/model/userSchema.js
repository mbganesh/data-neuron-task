const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    names: [
      {
        _id: mongoose.Types.ObjectId,
        value: String,
      },
    ],
    addCount: Number,
    updateCount: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User;
