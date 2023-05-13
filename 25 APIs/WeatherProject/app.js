const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const url = 'https://api.openweathermap.org/data/2.5/weather';
const params = '?units=imperial&appid={app_id}'
const atl_lat_lon = 'lat=33.749001&lon=-84.387978'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var city = req.body.city;

    https.get(url + params + '&q=' + city, (message) => {
        message.on('data', (data) => {
            const wd = JSON.parse(data);
            var weather = wd.weather[0]
            var img_url = 'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'

            res.write(
                '<h1>' + wd.name + ' is currently ' + wd.main.temp + ' degrees with ' + wd.main.humidity + '% humidity. </h1>'
            )
            res.write('<p>' + weather.main + '</p>')
            res.write('<img src="' + img_url + '"/>')
            res.write('<p>' + weather.description + '</p>')

            res.send()
        });
    });
});

app.listen(3000, () => { console.log('Running on Port 3000!') })


