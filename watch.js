var watch = require('node-watch');
var exec = require('child_process').exec;

console.log('Watching es6...');
watch('es6', function(filename) {
  process.stdout.write(filename + ' changed, transpiling...');
  exec('./transpile.sh', function() {
    process.stdout.write('ok\n');
  });
});
