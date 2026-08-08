require('dotenv').config()
const express = require("express");
const customerRoutes = require('./routes/customer.route');
const { error } = require('node:console');
const app = express();


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine" ,"ejs")
app.set("views" , "views");

app.use('/' , customerRoutes);



const port = process.env.PORT || 7000;
app.listen(port , ()=> console.log(`listening on port ${port}`))