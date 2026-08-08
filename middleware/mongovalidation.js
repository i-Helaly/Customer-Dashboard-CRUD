
const { param } = require("express-validator");
const mongoValidation = [
  param("id").isMongoId().withMessage("Invalid MongoDB ID"),
];