const mongoose = require("mongoose");

//Schema for saving user info
const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    depositBalance: {
      type: Number,
      default: 0,
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
