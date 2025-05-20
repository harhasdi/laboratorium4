const express = require('express');
const app = express();
const productsRoutes = require('./routing/products');
const { connectToDb } = require('./utils/database');

app.use(express.json());


app.use('/products', productsRoutes);


connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('Сервер працює на http://localhost:3000');
    });
  } else {
    console.error('Помилка підключення до бази даних:', err);
  }
});
