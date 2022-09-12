const express = require("express");
const app = express();
const connection = require("./utils/connection");
const middleware = require("./middleware");
const userRoute = require("./Router/v1/user");
const paymentRoute = require("./Router/v1/paymentToken");

app.use(middleware);
app.use("/users", userRoute);
app.use("/paymentHistory", paymentRoute);

app.get("/", (req, res) => {
  res.send("hallo world");
});

app.all("*", (req, res) => {
  res.send({ data: "No data Found" });
});

module.exports = app;
