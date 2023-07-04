const Book = require('../models/Book');

const getBook = (req, res) => {
    console.log(req.body);
    res.json({ message: 'OK' });
};

module.exports = {
    getBook
}