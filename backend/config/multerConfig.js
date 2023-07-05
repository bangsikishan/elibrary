const multer = require('multer');

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
            checkFileType(file);
            cb(null, true);
        } catch (err) {
            cb(err);
        }
    }
});

module.exports = upload;