const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Newsletter Signup!');
})


app.listen(3000, () => {
    console.log('Running on port 3000!');
})