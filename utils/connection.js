const mysql = require("mysql");
const DatabaseConnectionConfig = {
  port: 3306,
  host: "slime.hostitbro.com",
  user: "shubh",
  password: "w6)iZ3udU?GK",
  database: "elitepro_learning-elite",
};
const connection = mysql.createConnection(DatabaseConnectionConfig);
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connection success");
  }
});

/* host:https://slime.hostitbro.com
Port: 3306
shubh


Username- elitepro_learning-elite
Password - w6)iZ3udU?GK */

module.exports = connection;
