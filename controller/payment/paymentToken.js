const connection = require("../../utils/connection");

module.exports.getAllPaymentHistory = (req, res) => {
  const query = "SELECT * FROM wp_woocommerce_payment_tokens";
  connection.query(query, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.getSinglePaymentHistory = (req, res) => {
  const query =
    "SELECT * FROM wp_woocommerce_payment_tokens WHERE user_email=?";
  connection.query(query, [req.params.email], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.saveAPaymentHistory = (req, res) => {
  const body = req.body;
  console.log(body);
  const query = `INSERT INTO wp_woocommerce_payment_tokens SET ? `;
  connection.query(query, body, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.updatePaymentHistory = (req, res) => {
  const id = req.params.id;

  const { gateway_id, user_id, amount } = req.body;
  console.log(id, req.body);
  const query =
    "UPDATE wp_woocommerce_payment_tokens SET gateway_id = ?, user_id = ?, amount = ?  WHERE token_id = ? ";
  connection.query(
    query,
    [gateway_id, user_id, amount, id],
    (error, result) => {
      if (error) {
        return res.send(error);
      } else {
        res.send(result);
      }
    }
  );
};
/* , [status, notes, id], */
module.exports.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const date = new Date();
  console.log(date);
  const query =
    "UPDATE wp_woocommerce_payment_tokens  SET status= ?, notes = ?, date= ? WHERE token_id= ?";
  connection.query(query, [status, notes, date, id], (error, result) => {
    if (error) {
      return res.send("error", error);
    } else {
      res.send(result);
    }
  });
};
module.exports.deletePaymentHistory = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM `wp_woocommerce_payment_tokens` WHERE token_id= ?";
  connection.query(query, id, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
