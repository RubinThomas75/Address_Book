var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).json({
        message: 'get requests of contact'
    });
});
router.post('/', function (req, res, next) {
    res.status(200).json({
        message: 'post requests of contact'
    });
});
module.exports = router;
