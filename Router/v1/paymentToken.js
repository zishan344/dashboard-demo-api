const express = require("express");
const router = express.Router();
const payments = require("../../controller/payment/paymentToken");
// an point ---- api/v1/paymentHistory
router
  .route("/")
  .get(payments.getAllPaymentHistory)
  .post(payments.saveAPaymentHistory);

router
  .route("/:id")
  .delete(payments.deletePaymentHistory)
  .put(payments.updatePaymentHistory)
  .patch(payments.updateStatus)
  .get(payments.getSinglePaymentHistory);

module.exports = router;
