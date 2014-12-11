var WebSocketServer = require("ws").Server,
    Writable = require("stream").Writable,
    xtend = require("xtend");

module.exports = function TubeSock(opts) {
  var server, options;

  options = xtend({
    port: 9999,
    sendOptions: true
  }, opts);

  server = new WebSocketServer(options);
  server.on("connection", function connection(ws) {
    var stream;
    ws.on("close", function close() { stream.end() });

    stream = Writable();
    stream._write = function write(chunk, enc, next) {
      ws.send(chunk.toString());
      next();
    }

    if (options.sendOptions) {
      ws.send(JSON.stringify(options));
    }
    process.stdin.pipe(stream);
  });

  process.stdin.pipe(process.stdout);
}
