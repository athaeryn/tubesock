# Tubesock

Tubesock is a little utility that pipes stdin to a WebSocket (and back again).

## installation

```sh
$ npm install -g tubesock
```

## usage

```sh
$ tail -f tubes.log | tubesock
```

```js
ws = new WebSocket('ws://localhost:9999')
ws.onmessage = function () { ... }
```

## options

### `--port`

The port to open the WebSocket server on. Default `9999`.

### `--send-options`

The port to open the WebSocket server on. Default `true`.

### custom options

As long as you don't set `--send-options` to `false`, any additional options
you pass to `tubesock` will be sent to new client connections.


## contributing

Do it!
