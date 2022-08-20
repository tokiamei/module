/* 统一暴露 */

const school = 'MIT'
const demon = {
    name: 'valak',
    gender: 'unknown'
}

function f() {
    console.log(demon);
}

export { school, demon, f }