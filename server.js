const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4050;

app.get('/home', (req, res) => {
    res.send({Server: 'working'});
})

app.listen(PORT, () => {
    console.log('Sever started at port: ' + PORT);
})