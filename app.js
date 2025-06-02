const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routing/bookRoutes');     
const authorRoutes = require('./routing/authorRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

app.use(bookRoutes);
app.use(authorRoutes);

mongoose.connect('mongodb://localhost:27017/lab9', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Połączono z MongoDB');
  app.listen(3000, () => console.log('Serwer działa na porcie 3000'));
}).catch(err => {
  console.error('Błąd połączenia z MongoDB:', err);
});
