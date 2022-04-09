const mongoose = require("mongoose");
//Schema for Fundraises

const FundraiseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    goal: {
      type: Number,
      required: true,
    },
    collected: {
      type: Number,
      default: 0,
    },
    totalDonators: {
      type: Number,
      default: 0,
    },
    isGoalReached: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Fundraise", FundraiseSchema);
