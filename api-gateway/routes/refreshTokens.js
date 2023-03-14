const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens')

const verifyToken = require('../middlewares/verifyToken');

router.post('/', refreshTokensHandler.refreshToken);

module.exports = router;
