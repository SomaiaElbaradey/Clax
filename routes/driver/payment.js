// Modules
const express = require("express");
const router = express.Router();
// Middlewares
const authentication = require("../../middlewares/authentication");
// Controllers
const { d_balance, d_history } = require("../../controllers/driver/payment-details");
//------------

router.post("/mybalance", d_balance);//req with id to get balance
router.post("/myhistory", d_history);//req with id to get history


module.exports = router;
