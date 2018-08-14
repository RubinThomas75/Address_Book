//Rubin Thomas
//Typescript Address Book
//Training Day 2
var express = require('express');
var requestHandle = express();
//will route to contacts in this addressbook
var contactRoutes = require('./api/routes/contact');
requestHandle.use('/contact', contactRoutes);
module.exports = requestHandle;
