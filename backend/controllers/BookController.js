const Book = require('../models/Book');

const getBook = (req, res) => {
    console.log(req.body);
    res.json({ message: 'Get Book' });
};

const addBook = (req, res) => {
    console.log(req.body);
    res.json({ message: 'Add Book' });
};

module.exports = {
    getBook, 
    addBook
}