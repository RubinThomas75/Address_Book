

import * as express from 'express';

export const router = express.Router();

router.get('/:name', (req, res, next) => {
    res.status(200).json({
        message: 'get requests of contact'
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'post requests of contact'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'delete requests of contact'
    });
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post requests of contact'
    });
});