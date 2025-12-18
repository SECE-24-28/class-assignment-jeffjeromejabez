// core modules
// http path,os,fs

const http = require("http");

const server = http.createServer((request, response) => {
    console.log("server is created");
    response.write("HTTP Server got created");
    response.end();
});

server.listen(4000);