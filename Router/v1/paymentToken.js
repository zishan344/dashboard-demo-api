const express = require("express");
const router = express.Router();
const payments = require("../../controller/payment/paymentToken");
router
  .route("/")
  .get(payments.getAllPaymentHistory)
  .post(payments.saveAPaymentHistory);
router
  .route("/:id")
  .delete(payments.deletePaymentHistory)
  .put(payments.updatePaymentHistory)
  .patch(payments.updateStatus);

module.exports = router;
