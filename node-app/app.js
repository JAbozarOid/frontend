const EventEmitter = require("events"); // EventEmitter is a class

const AbozarLogger = require("./logger");
const logger = new AbozarLogger();

// register a listener
logger.on("messageLogged", (arg) => {
  // arg can be 'e' or 'eventArg'
  console.log("listener called", arg);
});

logger.aboLog("Abozar log message");
