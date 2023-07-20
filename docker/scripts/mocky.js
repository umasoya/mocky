const mocky = require('mocky');

const paths = [
    ...require('./routes/200'),
    ...require('./routes/404'),
    ...require('./routes/json')
];

// all requests will be logged into console
mocky.recorder.start({print: true});

// start server
mocky.createServer(paths).listen(3000);
