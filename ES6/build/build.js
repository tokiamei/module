(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module01');

console.log(_module.data, _module.msg);
(0, _module.f)();
(0, _module.g)();
},{"./module01":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.f = f;
exports.g = g;
/* 分别暴露 */
var data = exports.data = { name: "\u5C3C\u7279\u7F57", age: 100 };
var msg = exports.msg = "\u82B1\u82B1\u7684\u4E16\u754C";

function f() {
    console.log("----------");
}

function g() {
    return ["\u897F\u7D22"];
}
},{}]},{},[1]);
