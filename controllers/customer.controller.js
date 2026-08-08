
const Customer = require('../model/customer.model');
var moment = require('moment');

const getHome = async(req, res) => {
const allCustomer = await Customer.find();
  res.render("index" , {allCustomer , moment:moment});
};

const getAddCustomer = (req, res) => {
  res.render("user/add");
}

const addCustomer = async (req , res)=>{
   
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json("Customer Created");
    res.redirect('/');
}

const getSingleCustomer = async(req,res)=>{
    const userId = req.params.id;
    const showCustomer = await Customer.findById(userId)
    res.render('user/view' , {showCustomer , moment:moment})
}


const viewEditCustomer = async(req,res)=>{
  const userId = req.params.id;
  const customers = await Customer.findById(userId)
  res.render('user/edit' , {customers})
}

const editCustomer = async(req,res)=>{
  const userId = req.params.id;
  const updated = await Customer.findByIdAndUpdate(userId , req.body)
  res.status(201).json({msg : "updated"})
}

module.exports ={
    getHome,
    getAddCustomer,
    addCustomer,
    getSingleCustomer,
    viewEditCustomer,
    editCustomer
}