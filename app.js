
var express = require('express');

var app = express();

var favicon = require('serve-favicon');

var proxy = require('./routes/proxy');

// 设置静态目录
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('bower_components'));
app.use(express.static('views'));
app.use(express.static('scripts'));

app.use(favicon(__dirname + '/favicon.ico'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/proxy', proxy);

app.listen(4000);