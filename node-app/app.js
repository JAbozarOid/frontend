const { log, endpoint, logMsg } = require("./logger");
const path = require("path") // built-in path module 
const os = require("os")
const EventEmitter = require("events") // EventEmitter is a class

function showName(name) {
    console.log('hello' + name) // global
}

function globalObjectsInJavascript() {
    setTimeout() // 1 second 2 second
    clearTimeout()

    setInterval(() => {
        
    }, interval);

    clearInterval()
}

// this function added to global scope
var sayHello = function() {

}
//window.sayHello()

//showName('Abozar')

var totalMem = os.totalmem
var freeMem = os.freemem

console.log(endpoint) // endpoint is defined in another module
console.log(logMsg('mmmmmmmmmmmmmmmmmmmmmmmmm'))
console.log(path.parse(__filename))

console.log('total memory is ' + totalMem)
// after ECMAScript 6 or 2015
console.log(`free memory is ${freeMem}`)


// instance of the class EventEmitter
const emitter = new EventEmitter()
// register a listener
emitter.on('messageLogged',function() {
    console.log('listener called')
})
// raise an event
emitter.emit('messageLogged')