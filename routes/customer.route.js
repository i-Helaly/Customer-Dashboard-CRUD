const express = require("express");
const router = express.Router();
const customerController = require('../controllers/customer.controller')
const bodyValidation = require('../middleware/validation')
const validationRes = require('../middleware/validationRes')
const mongoValidation = require('../middleware/mongovalidation');

router.get("/",customerController.getHome );
router.get("/user/add", customerController.getAddCustomer);
router.post("/user/add" ,bodyValidation ,validationRes,customerController.addCustomer )
router.get('/user/view/:id',mongoValidation,validationRes, customerController.getSingleCustomer)

module.exports = router;
