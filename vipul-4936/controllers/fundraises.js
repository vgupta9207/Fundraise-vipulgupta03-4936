const Fundraise = require("../models/Fundraise");
//conatins the logic for the all the fundraise API's

getUserFundraises = async (req, res) => {
  try {
    const userId = req.params.id;
    const fundraises = await Fundraise.find({ user: userId });

    return res.status(200).json(fundraises);
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};
getFundraises = async (req, res) => {
  try {
    const limit = req.query.limit;
    const fundraises = await Fundraise.find().limit(limit || 10);

    return res.status(200).json(fundraises);
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};

getFundraise = async (req, res) => {
  try {
    const id = req.params.id;
    const fundraise = await Fundraise.findOne({ _id: id });

    return res.status(200).json(fundraise);
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message });
  }
};


module.exports={getUserFundraises,getFundraises,getFundraise };
