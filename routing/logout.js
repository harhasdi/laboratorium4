const express = require('express');
const router = express.Router();
const { getLogoutView, killApplication } = require('../controllers/logoutController');

router.get('/', getLogoutView);
router.get('/kill', killApplication);

module.exports = router;
