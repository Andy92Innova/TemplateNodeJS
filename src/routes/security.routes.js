const express = require('express');
const router = express.Router();

const { connect } = require('../controllers/security.controller');

router.get('/connect', connect)


module.exports = router;