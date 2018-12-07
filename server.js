const express = require('express');
const https = require('https');
const app = express();
const fs = require('fs');

//Get certificate and key
var options = {
    key: fs.readFileSync('ca.key'),
    cert: fs.readFileSync('ca.crt'),
    passphrase: '12345'
}

var billers = ['PAYEX','LZADA','MCECO'];

https.createServer(options, app).listen(442, function(req,res){
    console.log("Connected to HTTPS");
});

app.get('/getall', function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(billers));
});