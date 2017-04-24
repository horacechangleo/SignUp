#!/usr/local/bin/node
$("input[type=button]").html("loading");
var fs = require('fs'),
    qs = require('querystring'),
    param = qs.parse(process.env.QUERY_STRING),
    filename = '../name.json',
    input = "{"+param.mail+","+param.user+","+param.pw+"}";

fs.appendFile(filename,input,'utf8');
$("input[type=button]").html("ok");
