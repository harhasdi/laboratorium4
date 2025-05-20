const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.addProductToCart = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'No product name' });

  const products = await Product.getAll();
  const product = products.find(p => p.name === name);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await Cart.add(product);
  const cart = await Cart.getCart();
  res.json({ cartCount: cart.totalCount });
};
