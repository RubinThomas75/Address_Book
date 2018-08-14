//Rubin Thomas
//Typescript Address Book
//Training Day 2

const express = require('express');

const requestHandle = express();

requestHandle.use((req, res, next) => {
    res.status(200).json({
        message: 'working'
    });
});

module.exports = requestHandle;
