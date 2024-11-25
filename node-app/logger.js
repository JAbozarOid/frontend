// for logging our messages --> remote
// send http request to the below url

// this is private --> it can not accessable from app.js
var url ='http://mylogger.io/log';

// this is private --> it can not accessable from app.js
function log(message) {
    console.log(message);
}


// if we want log and url be public we must use export
module.exports.logMsg = log;
module.exports.endpoint = url
