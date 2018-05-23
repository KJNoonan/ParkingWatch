import request from "request-promise";
//var request = require("request-promise");

request({
  method: "GET",
  uri: "https://google.com/",
  json: true
}).then(console.log, console.log);
