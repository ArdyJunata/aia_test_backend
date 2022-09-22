const express = require('express');
const router = express.Router();

const {
    imageList
} = require('../controller/feedController');

router.get('/', imageList)

module.exports = router;