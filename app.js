const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const homeRoutes = require('./routing/home');
const logoutRoutes = require('./routing/logout');
const productRoutes = require('./routing/products');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing
app.use('/', homeRoutes);
app.use('/logout', logoutRoutes);
app.use('/products', productRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
