const express = require('express')
const multer  = require('multer')
var path = require('path');
var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            //req.body is empty...
            cb( null, Math.random()*100000000000000000+path.extname(file.originalname));
        }
    }
);
const upload = multer({ storage: storage })

const app = express()

app.post('/stats', upload.single("uploaded_file"), function (req, res) {
res.json({ message: 'Successfully uploaded image!' });
});

app.listen(3000, () => 
    console.log('Server started on port 3000')
);