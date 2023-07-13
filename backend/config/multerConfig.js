const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const newFilename = file.originalname + '-' + Date.now() + '.' + ext;
        cb(null, newFilename);
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf") {
        cb(null, true);
    } else {
        cb(new Error("Error: PDF files only!"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: multerFilter
});

module.exports = { upload };