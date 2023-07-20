/**
 * GET: filesディレクトリにあるjsonファイルを返す
 * POST: POSTされたjsonをオウム返しする
 */
const fs = require('fs');
const url = '/json';
const header = { 'Content-Type': 'application/json' };
module.exports = [
    // filesディレクトリにある与えられたファイル名のファイルの中身を返す
    {
        url: /\/json\?filename=.+/,
        method: 'GET',
        res: (req, res, callback) => {
            console.log(req.url);
            // const context = fs.readFileSync(`../files/`);
            const context = '{}';
            callback(null, {
                'status': 200,
                headers: header,
                body: JSON.stringify(JSON.parse(context))
            });
        }
    },
    // POSTされたjsonをオウム返し
    {
        url: '/json',
        method: 'POST',
        res: function(req, res, callback) {
            callback(null, {
                status: 200,
                headers: header,
                body: JSON.stringify(JSON.parse(req.body))
            });
        }
    }
];