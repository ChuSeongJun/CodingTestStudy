const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const sum=Number(input[0])+Number(input[1]);
    console.log(input[0]+" + "+input[1]+" = "+sum);
});


//다른 사람의 풀이
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let a, b;
//
// rl.on('line', function (line) {
//     [a, b] = line.split(' ').map(Number);
// }).on('close', function () {
//     console.log(`${a} + ${b} = ${a + b}`);
// });