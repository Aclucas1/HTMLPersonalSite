const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {

    var b = req.body
    const mail_api_key = process.env.MAILCHIMP_KEY;
    const mail_list_id = process.env.MAILCHIMP_LIST;
    var data = {
        members: [
            {
                email_address: b.email,
                email_type: 'html',
                status: 'subscribed',
                merge_fields: {
                    FNAME: b.firstName,
                    LNAME: b.lastName
                }
            }
        ]
    }
    console.log(data)
    const jsondata = JSON.stringify(data);
    console.log(jsondata)
    const url = 'https://us21.api.mailchimp.com/3.0/lists/'
    const options = {
        method: 'POST',
        auth: "user:" + mail_api_key,
    }
    console.log(options)

    const request = https.request(url + mail_list_id, options, (response) => {
        response.on('data', (data) => {
            console.log(data)
        })
    }).on('error', (error) => {
        console.error(error);
    });

    var ret = request.write(jsondata)

    console.log(ret)

    res.sendFile(__dirname + '/success.html');
});


app.listen(3000, () => {
    console.log('Running on port 3000!');
})