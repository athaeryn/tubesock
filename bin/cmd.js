var TubeSock = require("../"),
    minimist = require("minimist");

TubeSock(
  minimist(process.argv.slice(2))
);
