const express = require('express');
const router = express.Router();
const { getDb } = require('../utils/database');

router.get('/', async (req, res) => {
  const db = getDb();
  try {
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    console.error('Помилка при отриманні продуктів:', err);
    res.status(500).json({ error: 'Не вдалося отримати продукти' });
  }
});

module.exports = router;
