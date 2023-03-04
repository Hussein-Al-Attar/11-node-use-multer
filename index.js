const express = require('express');
const uploadImg = require('./middleware/uploadImg');

const app = express()

app.post('/stats',uploadImg, function (req, res) {
res.send(req.file.filename);
});

app.listen(3000, () => 
    console.log('Server started on port 3000')
);