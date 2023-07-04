const express = require('express');
const router = express.Router();

const { getBook } = require('../controllers/BookController');

router.post('/', getBook);

module.exports = router;