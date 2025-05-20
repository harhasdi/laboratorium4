const { MongoClient } = require('mongodb');

let db;

const connectToDb = async (callback) => {
  const uri = 'mongodb://localhost:27017'; 
  const client = new MongoClient(uri);

  try {
    await client.connect();
    db = client.db('productsdb'); 
    console.log('Підключено до MongoDB');
    callback();
  } catch (err) {
    callback(err);
  }
};

const getDb = () => db;

module.exports = {
  connectToDb,
  getDb,
};
