/**
 * GET: filesディレクトリにあるxmlファイルを返す
 * POST: POSTされたxmlをオウム返しする
 */
const fs = require('fs');
const header = { 'Content-Type': 'application/xml; charset=utf-8' };
module.exports = [
    // filesディレクトリにある与えられたファイル名のファイルの中身を返す
    {
        url: /\/xml\?filename=.+/,
        method: 'GET',
        res: (req, res, callback) => {
            try {
                const url = new URL(req.url, 'http://localhost');
                const filename = url.searchParams.get('filename');
                const context = fs.readFileSync(`/app/files/${filename}`);
                callback(null, {
                    'status': 200,
                    headers: header,
                    body: context
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
    // POSTされたxmlをオウム返し
    {
        url: '/xml',
        method: 'POST',
        res: (req, res, callback) => {
            try {
                callback(null, {
                    status: 200,
                    headers: header,
                    body: req.body
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