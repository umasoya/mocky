/**
 * あらゆるメソッドのリクエストに 404 Not Found を返す
 */

const url = '/404';
const response = {
    status: 404,
    header: { 'Content-Type': 'text/plain' },
    body: '404 Not Found'
};

module.exports = [
    {
        url: url,
        method: 'GET',
        res: response
    },
    {
        url: url,
        method: 'POST',
        res: response
    },
    {
        url: url,
        method: 'PUT',
        res: response
    },
    {
        url: url,
        method: 'DELETE',
        res: response
    },
];