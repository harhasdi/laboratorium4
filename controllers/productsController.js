const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.getAllProducts = async (req, res) => {
  const products = await Product.getAll();
  const cart = await Cart.getCart();
  res.render('product', { products, cartCount: cart.totalCount });
};

exports.getAddProductForm = (req, res) => {
  res.render('add-product');
};

exports.addProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price || isNaN(price)) {
    return res.status(400).send('Invalid product data');
  }
  await Product.add(name, parseFloat(price));
  res.redirect('/');
};

exports.deleteProduct = async (req, res) => {
  const productName = req.params.productName;
  await Product.deleteByName(productName);
  await Cart.deleteProductByName(productName);
  res.redirect('/');
};
