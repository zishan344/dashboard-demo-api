const connection = require("../../utils/connection");

module.exports.makeModerator = (req, res) => {
  const email = req.params.email;
  console.log(email);
  const params = req.body;
  console.log(params);
  const query = "UPDATE `wp_users` SET `role`='moderator' WHERE user_email= ?";
  connection.query(query, email, (error, result) => {
    if (error) {
      return res.send(error);
    } else {
      res.send(result);
    }
  });
};
