#!/usr/local/bin/node

var fs = require("fs"),
    qs = require("querystring"),
    param = qs.parse(process.env.QUERY_STRING),
    filename = "../name.json",
    input="{"+param.mail+","+param.user+","+param.pw+"}";

fs.appendFile(filename,input,"utf8");
console.log('Content-type: text/html; charset=utf-8\n');
console.log('ok');
