//Rubin Thomas
//Typescript Address Book
//Training Day 2
var express = require('express');
var requestHandle = express();
requestHandle.use(function (req, res, next) {
    res.status(200).json({
        message: 'working'
    });
});
module.exports = requestHandle;
