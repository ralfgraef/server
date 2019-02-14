const express = require('express');
const multer = require('multer');

const app = express();

// Multer middleware
const upload = multer({
    dest: './uploads/'
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file});
})

app.listen(3344, () => console.log('Server on localhost:3344'));