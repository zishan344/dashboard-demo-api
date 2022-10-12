const connection = require("../../utils/connection");

module.exports.getAllUserData = (req, res) => {
  const query = "SELECT * FROM wp_users";
  connection.query(query, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.getSingleUser = (req, res) => {
  console.log(req.params.email);

  const query = "SELECT * FROM wp_users WHERE user_email=?";
  connection.query(query, [req.params.email], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.saveAUser = (req, res) => {
  const body = req.body;
  const query = `INSERT INTO wp_users SET ?`;
  connection.query(query, body, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.updateUser = (req, res) => {
  const email = req.params.email;
  const { user_login, user_pass, user_email } = req.body;
  const query =
    "UPDATE wp_users SET user_login= ?, user_pass= ?, user_email= ?  WHERE user_email = ? ";
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
module.exports.updateRouterAccess = (req, res) => {
  console.log(req.body);
  const { email } = req.headers;
  console.log(email);
  const body = req.body;
  const bodyString = JSON.stringify(body);
  console.log(bodyString);
  const { user_login, user_pass, user_email } = req.body;
  const query = "UPDATE wp_users SET routingAccess = ? WHERE user_email = ? ";
  connection.query(query, [bodyString, email], (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
module.exports.deleteUser = (req, res) => {
  const email = req.params.email;
  const query = "DELETE FROM `wp_users` WHERE user_email= ?";
  connection.query(query, email, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
