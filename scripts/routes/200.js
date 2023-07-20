/**
 * あらゆるメソッドのリクエストに 200 OK を返す
 */

const url = '/200';
const body = '200 OK';

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