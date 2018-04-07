const chokidar = require('chokidar');

module.exports = function (app) {
  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  chokidar
    .watch(process.env.WEBCROW_HOME, {})
    .on('all', (event, path) => {
      console.log(event, path);
    });
};
