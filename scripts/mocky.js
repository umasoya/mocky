const mocky = require('mocky');

const paths = [
    ...require('./routes/status_code'),
    ...require('./routes/json'),
    ...require('./routes/xml')
];

// all requests will be logged into console
mocky.recorder.start({print: true});

// start server
mocky.createServer(paths).listen(3000);
