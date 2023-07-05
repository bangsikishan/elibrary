const Book = require('../models/Book');
const { newFilename } = require('../config/multerConfig');

const getBook = (req, res) => {
    console.log(req.body);
    res.json({ message: 'Get Book' });
};

const addBook = (req, res) => {
    console.log(req.body, newFilename);
    res.json({ message: 'Add Book' });
};

module.exports = {
    getBook, 
    addBook
}