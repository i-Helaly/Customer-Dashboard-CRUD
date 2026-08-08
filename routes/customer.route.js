const express = require("express");
const router = express.Router();
const customerController = require('../controllers/customer.controller')


router.get("/",customerController.getHome );
router.get("/user/add", customerController.getAddCustomer);
router.post("/user/add" ,customerController.addCustomer )
router.get('/user/view/:id', customerController.getSingleCustomer)

module.exports = router;
