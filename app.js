var connect = require('connect'),
    http = require('http'),
    directory = './public',
    sys = require('sys'),
    exec = require('child_process').exec;

connect()
    .use(connect.static(directory))
    .listen(3001);

console.log('Demos are ready!');

function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("cd selenium-launchers && sh start.sh", puts);
