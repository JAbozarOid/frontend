const EventEmitter = require("events"); // EventEmitter is a class

// this module is reponsible for emit events

// this is private --> it can not accessable from app.js
var url = "http://mylogger.io/log";

// this is private --> it can not accessable from app.js
class AbozarLogger extends EventEmitter {
  aboLog(message) {
    console.log(message);

    // raise an event
    // emit can have arguments
    this.emit("messageLogged", { id: 1, url: "http" });
  }
}

// if we want log and url be public we must use export
module.exports = AbozarLogger;
module.exports.endpoint = url;
