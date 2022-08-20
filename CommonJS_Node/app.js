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