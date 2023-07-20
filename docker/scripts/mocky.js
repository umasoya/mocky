var mocky = require('mocky');

mocky.createServer([
    {
        // 投げられたjsonをオウム返し
        url: '/json',
        method: 'post',
        res: function(req, res, callback) {
            var json = JSON.parse(req.body);
            callback(null, {
                status: 200,
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(json)
            });
        }
    },
]).listen(3000);
