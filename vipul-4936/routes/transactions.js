const router = require("express").Router({ mergeParams: true });
const {addDonation,addDeposit} = require("../controllers/transactions");
const checkFunds = require("../middlewares/fundCheck");


// deposit money for users and donating money
router.post("/donate", checkFunds, addDonation);
router.post("/deposit", addDeposit);

module.exports = router;
