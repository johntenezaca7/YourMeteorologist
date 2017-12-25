const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4050

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({Server: "Working"});
})

app.listen(PORT, () => {
    console.log('Server started at: ' + PORT);
})
