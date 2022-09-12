const connection = require("../utils/connection");

const verifyRole = (req, res, next) => {
  const alldata = connection.query(
    "SELECT * FROM wp_users WHERE id = ?",
    req.headers.id,
    (error, result) => {
      if (error) {
        return res.status(400).message(error.message);
      } else {
        const admin = result.find((f) => f.user_login === "admin");
        if (admin) {
          next();
        } else {
          res.status(401).send("Unauthorized User");
        }
      }
    }
  );
};
module.exports = verifyRole;
