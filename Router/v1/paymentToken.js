const express = require("express");
const router = express.Router();
const payments = require("../../controller/payment/paymentToken");
router
  .route("/")
  .get(payments.getAllPaymentHistory)
  .post(payments.saveAPaymentHistory);

module.exports = router;
