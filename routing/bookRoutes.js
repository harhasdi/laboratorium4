const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/api/books', bookController.getAllBooks);
router.post('/api/books', bookController.createBook);
router.delete('/api/books/:id', bookController.deleteBook);

module.exports = router;
