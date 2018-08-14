//Rubin Thomas
//Typescript Address Book
//Training Day 2

const express = require('express');

const requestHandle = express();

//will route to contacts in this addressbook
const contactRoutes = require('./api/routes/contact');

requestHandle.use('/contact' , contactRoutes);


module.exports = requestHandle;
