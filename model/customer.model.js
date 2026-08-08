const mongoose = require("mongoose");
const { type } = require("node:os");

mongoose
  .connect(process.env.URI)
  .then(() => console.log("Connected Scuessfully"))
  .catch((err) => console.log(err));

const customerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
