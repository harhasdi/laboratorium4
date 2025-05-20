const { getDb } = require('../utils/database');

module.exports = class Product {
  static async getAll() {
    const db = getDb();
    return await db.collection('products').find().toArray();
  }

  static async add(name, price) {
    const db = getDb();
    await db.collection('products').insertOne({ name, price });
  }

  static async deleteByName(name) {
    const db = getDb();
    await db.collection('products').deleteOne({ name });
  }
};
