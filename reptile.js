var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
    superagent.get('http://movie.douban.com/subject/10463953/?tag=%E7%83%AD%E9%97%A8&from=gaia')
    .end(function (err, sres) {
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(sres.text);

//        var items = [];
//        $('#topic_list .topic_title').each(function (idx, element) {
//            var $element = $(element);
//            items.push({
//                title: $element.attr('title'),
//                href: $element.attr('href')
//            });
//        });

        //        res.send(items);
        var name = $('#content h1').html();
        var imagesource = $('#mainpic img').attr('src');
           // res.writeHead(200, {"Content-Type": "text/plain"});

         //   res.write(imagesource);
            res.send($('.actor .attrs a').html());
    });
});


app.listen(3000, function () {
    console.log('app is listening at port 3000');
});