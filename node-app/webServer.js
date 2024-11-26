const http = require("http");
const { url } = require("inspector");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
}); // response to callback functions

server.listen(3000); // 3000 means port

console.log("listening on port 3000....");
