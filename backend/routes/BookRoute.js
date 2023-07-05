const express = require('express');
const router = express.Router();

const { getBook, addBook } = require('../controllers/BookController');

const { upload } = require('../config/multerConfig');

router.post('/', getBook);

router.post('/add', upload.single('pdf'), addBook);

module.exports = router;