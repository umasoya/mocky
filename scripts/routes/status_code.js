/**
 * あらゆるメソッドのリクエストにURLで与えられたステータスコードを返す
 */

const url = /\/\d{3}/;
const headers = { 'Content-Type': 'text/plain; charset=utf-8' };
const messages = {
    200: '200 OK',
    404: '404 Not Found',
    500: '500 Internal Server Error'
};
const response = (req, res, callback) => {
    try {
        const statusCode = req.url.replace('/', '');
        const body = messages[statusCode] !== undefined ? messages[statusCode] : `Status Code: ${statusCode}`;
        callback(null, {
            'status': statusCode,
            headers: headers,
            body: body
        });
    } catch (err) {
        callback(null, {
            'status': 500,
            headers: headers,
            body: `500 Internal Server Error\n${err.message}`
        });
    }
};

module.exports = [
    {
        url: url,
        method: 'GET',
        res: (req, res, callback) => response(req, res, callback)
    },
    {
        url: url,
        method: 'POST',
        res: (req, res, callback) => response(req, res, callback)
    },
    {
        url: url,
        method: 'PUT',
        res: (req, res, callback) => response(req, res, callback)
    },
    {
        url: url,
        method: 'DELETE',
        res: (req, res, callback) => response(req, res, callback)
    },
];