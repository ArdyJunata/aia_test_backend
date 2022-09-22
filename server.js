"use strict";
require("dotenv").config();
const app = require("./app"),
    http = require("http");

const _port = process.env.APP_PORT || 8000;
const server = http.createServer(app);

server.listen(_port, (err) => {
    if (err) throw err;
    console.log(`the apps running at port ${_port}`)
});