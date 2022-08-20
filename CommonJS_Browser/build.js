(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* 这两是一个对象 */
// console.log(exports === module.exports); // true

/* 引入的是什么，取决于暴露的对象是什么 */
// const peiqi = require('./module03')
// const module04 = require('./module04')

/* 引入的时候进行解构赋值 */
const { a, b } = require('./module05')

console.log(a, b)
// console.log(peiqi);
// console.log(peiqi.sum(10, 100));
},{"./module05":2}],2:[function(require,module,exports){
module.exports = {
    a: 1,
    b: 2
}
},{}]},{},[1]);
