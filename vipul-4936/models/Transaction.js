const mongoose = require("mongoose");
//Schema for all Transactions like deposit and donating
const TransactionSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    fundraise: {
      type: mongoose.Schema.ObjectId,
      ref: "Fundraise",
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["deposit", "donation"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
