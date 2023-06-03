const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
// const https = require('https');

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    var day = new Date()
    var dotw = DAYS[day.getDay()]

    res.render('list', { dotw: dotw })

});


app.listen(3300, () => { console.log('Running > http://localhost:3300/ !') })