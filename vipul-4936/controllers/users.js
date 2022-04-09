
const User = require("../models/User");

// Contains the logic for users API
getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    return res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: err.message } });
  }
};

getUsers = async (req, res) => {
  try {
    const limit = req.query.limit;
    const users = await User.find().limit(limit || 10);

    return res.status(200).json(users);
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};
module.exports={getUser,getUsers};