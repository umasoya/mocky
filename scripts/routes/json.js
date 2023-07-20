/**
 * GET: filesディレクトリにあるjsonファイルを返す
 * POST: POSTされたjsonをオウム返しする
 */
const fs = require('fs');
const header = { 'Content-Type': 'application/json; charset=utf-8' };
module.exports = [
    // filesディレクトリにある与えられたファイル名のファイルの中身を返す
    {
        url: /\/json\?filename=.+/,
        method: 'GET',
        res: (req, res, callback) => {
            try {
                const url = new URL(req.url, 'http://localhost');
                const filename = url.searchParams.get('filename');
                const context = fs.readFileSync(`/app/files/${filename}`);
                callback(null, {
                    'status': 200,
                    headers: header,
                    body: JSON.stringify(JSON.parse(context))
                });
            } catch (err) {
                callback(null, {
                    'status': 500,
                    headers: { 'Content-Type': 'text/plain' },
                    body: `500 Internal Server Error\n${err.message}`
                });
            }
        }
    },
    // POSTされたjsonをオウム返し
    {
        url: '/json',
        method: 'POST',
        res: (req, res, callback) => {
            try {
                callback(null, {
                    status: 200,
                    headers: header,
                    body: JSON.stringify(JSON.parse(req.body))
                });
            } catch (err) {
                callback(null, {
                    'status': 500,
                    headers: { 'Content-Type': 'text/plain' },
                    body: `500 Internal Server Error\n${err.message}`
                });
            }
        }
    }
];