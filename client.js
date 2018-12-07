process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

var fs = require('fs'); 
var https = require('https');
var options = {
    hostname: 'localhost', 
    port: 442, 
    path: '/getall', 
    key: fs.readFileSync('client.key'),
    cert: fs.readFileSync('client.crt'),
    passphrase: '12345'
}

var req = https.request(options, function(res) { 
    res.on('data', function(data) { 
        process.stdout.write(data); 
    }); 
}); 
req.end();