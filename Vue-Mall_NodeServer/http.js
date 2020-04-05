const http = require("http");

const requestHandle = require("./modules/RequestHandle.js");

const hostName = "localhost",
    port = 3000;

const server = http.createServer(requestHandle);

server.listen(port, hostName, () => console.log("服务器开始监听: http://127.0.0.1:3000/"));
