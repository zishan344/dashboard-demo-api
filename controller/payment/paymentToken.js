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
  const query = `INSERT INTO wp_woocommerce_payment_tokens SET ?`;
  connection.query(query, body, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.updatePaymentHistory = (req, res) => {
  const email = req.params.email;
  const { user_login, user_pass, user_email } = req.body;
  const query =
    "UPDATE wp_woocommerce_payment_tokens SET user_login= ?, user_pass= ?, user_email= ?  WHERE user_email = ? ";
  connection.query(
    query,
    [user_login, user_pass, user_email, email],
    (error, result) => {
      if (error) {
        return res.send(error);
      } else {
        res.send(result);
      }
    }
  );
};
module.exports.deletePaymentHistory = (req, res) => {
  const email = req.params.email;
  const query =
    "DELETE FROM `wp_woocommerce_payment_tokens` WHERE user_email= ?";
  connection.query(query, email, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
