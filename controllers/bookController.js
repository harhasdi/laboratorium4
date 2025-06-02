const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
