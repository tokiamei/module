/* 
    相当于一个闭包
    不让别人读取内部的数据，提供一个方法来查看数据

    这里使用 module.exports.xxx = value 的方式去暴露，value 是暴露的内容，xxx 是它的名字
*/

const data = '杨戬'
module.exports.a = function f() {
    console.log(data);
}