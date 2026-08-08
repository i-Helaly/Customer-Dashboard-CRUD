const { body } = require("express-validator");

const bodyValidation = [
  body("firstname")
    .notEmpty()
    .withMessage("firstname Required")
    .isLength({ min: 3, max: 10 })
    .withMessage("range is 3 to 10"),
  body("lastname")
    .notEmpty()
    .withMessage("firstname Required")
    .isLength({ min: 3, max: 10 })
    .withMessage("range is 3 to 10"),
  body("email")
    .notEmpty()
    .withMessage("firstname Required")
    .isEmail()
    .withMessage("Must Be Email"),
  body("phone")
    .notEmpty()
    .withMessage("firstname Required")
    .isMobilePhone()
    .withMessage("Must Be Mobile phone"),
  body("country")
    .notEmpty()
    .withMessage("firstname Required")
    .isIn(["egypt", "morocco"])
    .withMessage("range egypt and morocco"),
  body("gender")
    .notEmpty()
    .withMessage("gender Required")
    .isIn(["male", "female"])
    .withMessage("range male and female"),
];

module.exports = bodyValidation;