const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/home.controller')
const { verifyTokenHadler } = require('./handlers/token.handler')

router.get('/getItems', verifyTokenHadler, getItems)

module.exports = router;