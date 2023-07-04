require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const bookRoute = require('./routes/BookRoute');

const app = express();

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb) {
        const newFilename = file.filename + '-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

function checkFileType(file, cb) {
    const allowedFileType = /pdf/;
    const extname = allowedFileType.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileType.test(file.mimetype);

    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb('Error: PDF files only!');
    }
}

const upload = multer({
    storage: storage,
    fileFilter: async function(req, file, cb) {
    try {
        await checkFileType(file);
        cb(null, true);
    } catch (err) {
        cb(err);
    }
}
});

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', bookRoute);

app.listen(process.env.PORT, () => console.log(`[+] Listening on port ${process.env.PORT}...`));