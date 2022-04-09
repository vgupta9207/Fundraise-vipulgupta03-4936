
const Transaction = require("../models/Transaction");
const Fundraise = require("../models/Fundraise");
const User = require("../models/User");
// Contains the logic for ll transaction API
addDeposit = async (req, res) => {
  try {
    const txInfo = req.body;
    const amount = txInfo.amount;

    const newTx = new Transaction(txInfo);
    await newTx.save();

    const updatedUser = await User.findByIdAndUpdate(
      { _id: txInfo.sender },
      { $inc: { depositBalance: amount } },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};

addDonation = async (req, res) => {
  try {
    const txInfo = req.body;
    const fundraiseId = txInfo.fundraise;
    const senderId = txInfo.sender;

    // add transaction
    const newTx = new Transaction(txInfo);
    await newTx.save();

    // update fundraise
    const fundraise = await Fundraise.findOneAndUpdate(
      { _id: fundraiseId },
      { $inc: { collected: txInfo.amount, totalDonators: 1 } },
      { new: true }
    );

    // update user balance
    await User.findOneAndUpdate(
      { _id: senderId },
      { $inc: { depositBalance: -txInfo.amount } }
    );

    const donations = await Transaction.find({
      fundraise: fundraiseId,
    }).populate("sender");

    return res.status(200).json({ fundraise ,donations});
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: err.message });
  }
};

module.exports={addDeposit,addDonation};