const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/api/authors', authorController.getAllAuthors);
router.put('/api/authors/:id', authorController.updateAuthor);

module.exports = router;
