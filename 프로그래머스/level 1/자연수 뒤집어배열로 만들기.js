function solution(n) {
    var answer = [];

    console.log(n);
    answer=String(n).split('').reverse().map(num=>Number(num));
    return answer;
}

console.log(solution(12345))