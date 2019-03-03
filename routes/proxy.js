
var router = require('express').Router();

var request = require('request');

var moment = require('moment');

module.exports = router;

// 今日一刻
router.post('/today', function (req, res) {
	var today = moment(new Date).format('YYYY-MM-DD');
	// 数据请求
	request({
		url: 'https://moment.douban.com/api/stream/date/' + today,
		method: 'get',
		qs: {
			alt: 'json',
			apikey: '0bcf52793711959c236df76ba534c0d4',
			app_version: '1.7.4',
			douban_udid: 'd623045db9fcb0d5243174c1bf1a675f887047c0',
			format: 'full',
			udid: '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
			version: 6
		}
	}, function (err, response, body) {
		if(err) return;

		res.json(JSON.parse(body));
	});
});

// 往期内容
router.post('/older', function (req, res) {
	var date = moment(moment(new Date).subtract(1, 'days')).format('YYYY-MM-DD');
	// 数据请求
	request({
		url: 'https://moment.douban.com/api/stream/date/' + date,
		method: 'get',
		qs: {
			alt: 'json',
			apikey: '0bcf52793711959c236df76ba534c0d4',
			app_version: '1.7.4',
			douban_udid: 'd623045db9fcb0d5243174c1bf1a675f887047c0',
			format: 'full',
			udid: '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
			version: 6
		}
	}, function (err, respone, body) {
		if(err) return;

		res.json(JSON.parse(body));
	});
});

// 热门作者
router.post('/author', function (req, res) {
	request({
		url: 'https://moment.douban.com/api/auth_authors/rec',
		qs: {
			alt: 'json',
			apikey: '0bcf52793711959c236df76ba534c0d4',
			app_version: '1.7.4',
			count: 20,
			douban_udid: 'd623045db9fcb0d5243174c1bf1a675f887047c0',
			start: 0,
			udid: '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
			version: 6
		}
	}, function (err, respone, body) {
		if(err) return;

		var rec = JSON.parse(body);

		request({
			url: 'https://moment.douban.com/api/auth_authors/all',
			qs: {
				alt: 'json',
				apikey: '0bcf52793711959c236df76ba534c0d4',
				app_version: '1.7.4',
				count: 20,
				douban_udid: 'd623045db9fcb0d5243174c1bf1a675f887047c0',
				start: 0,
				udid: '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
				version: 6
			}
		}, function (err, respone, body) {
			if(err) return;

			var all = JSON.parse(body);

			res.json({rec: rec, all: all});
		});
	});
});

// 栏目浏览
router.post('/category', function (req, res) {
	request({
		url: 'https://moment.douban.com/api/columns',
		qs: {
			alt: 'json',
			apikey: '0bcf52793711959c236df76ba534c0d4',
			app_version: '1.7.4',
			douban_udid: 'd623045db9fcb0d5243174c1bf1a675f887047c0',
			udid: '9a34d8b038ff38971050199b0c5ee9c60c6d1ca3',
			version: 6
		}
	}, function (err, respone, body) {
		if(err) return;

		res.json(JSON.parse(body));
	});
});



