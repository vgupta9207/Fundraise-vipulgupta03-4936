const router = require("express").Router({ mergeParams: true });
const{getUserFundraises,getFundraises,getFundraise } = require("../controllers/fundraises");

// get balance for the fundraises
router.get("/", getFundraises);
router.get("/:id", getFundraise);
router.get("/user/:id", getUserFundraises);

module.exports = router;
