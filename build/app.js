var connect = require('connect'),
    directory = './public';

connect()
    .use(connect.static(directory))
    .listen(3001);

console.log('Demos are ready!');
