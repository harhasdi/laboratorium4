const Author = require('../models/author');

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAuthor) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
