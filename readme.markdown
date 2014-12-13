# Tubesock

Tubesock is a little utility that pipes stdin to a WebSocket (and back again).

## installation

```sh
$ npm install -g tubesock
```


## usage example

Pipe random numbers to `tubesock`:

```sh
$ while true; do
  ruby -e "puts rand(30) + 50";
  sleep 1;
  done | tubesock
```

Then you can read the data coming from the WebSocket:

```js
ws = new WebSocket('ws://localhost:9999')
ws.onmessage = function () { ... }
```

Here it is connected to [a graph](http://bars.mea.io):

![bars.mea.io](http://mea.io/images/tubesock/bars.gif)


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
