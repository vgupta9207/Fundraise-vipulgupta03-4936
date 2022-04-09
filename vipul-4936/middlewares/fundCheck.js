
const User = require("../models/User");
// Middleware to chek if a user has the required fund balance
const checkFunds = async (req, res, next) => {
  try {
    const { amount, sender } = req.body;

    // check available funds
    const user = await User.findById(sender);
    const hasAvailableFunds = user.depositBalance >= amount;

    if (!hasAvailableFunds) {
      return res
        .status(200)
        .json({ error: { message: "Insufficient funds" } });
    }
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};

module.exports = checkFunds;
