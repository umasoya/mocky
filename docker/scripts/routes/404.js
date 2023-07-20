/**
 * あらゆるメソッドのリクエストに 404 Not Found を返す
 */

const url = '/404';
const body = '404 Not Found';

module.exports = [
    {
        url: url,
        method: 'GET',
        res: body
    },
    {
        url: url,
        method: 'POST',
        res: body
    },
    {
        url: url,
        method: 'PUT',
        res: body
    },
    {
        url: url,
        method: 'DELETE',
        res: body
    },
];