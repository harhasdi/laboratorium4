const { getDb } = require('../utils/database');

module.exports = class Cart {
  static async getCart() {
    const db = getDb();
    const cart = await db.collection('cart').findOne({ _id: 'main' });
    return cart || { items: [], totalCount: 0 };
  }

  static async add(product) {
    const db = getDb();
    const cart = await this.getCart();

    const existingItem = cart.items.find(i => i.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.items.push({ name: product.name, quantity: 1 });
    }

    cart.totalCount = (cart.totalCount || 0) + 1;

    await db.collection('cart').updateOne(
      { _id: 'main' },
      { $set: cart },
      { upsert: true }
    );
  }

  static async deleteProductByName(name) {
    const db = getDb();
    const cart = await this.getCart();
    const item = cart.items.find(i => i.name === name);
    if (item) {
      cart.totalCount -= item.quantity;
      cart.items = cart.items.filter(i => i.name !== name);
      await db.collection('cart').updateOne(
        { _id: 'main' },
        { $set: cart },
        { upsert: true }
      );
    }
  }
};
