const Book = require('../models/Book');

const getBook = (req, res) => {
    console.log(req.body);
    res.json({ message: 'Get Book' });
};

const addBook = async (req, res) => {
    const newFileName = req.file.filename;
    const { book, author } = req.body;

    if(!book || !author) {
        return res.status(400).json({ error: 'Please enter all fields!' });
    }

    const bookData = await Book.create({ title: book, author, path: newFileName });
    
    res.status(201).json(bookData);
};

module.exports = {
    getBook, 
    addBook
}