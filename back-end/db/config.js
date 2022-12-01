const mongoose = require("mongoose");
console.log("------------")
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => {
    console.log("connected DB...");
  })
  .catch((err) => {
    console.log(err);
  });