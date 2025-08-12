function solution(binomial) {
    var answer = 0;
    const [a, op, b] = binomial.split(" ");
    if (op === "+") {
        answer = Number(a) + Number(b);
    } else if (op === "-") {
        answer = Number(a) - Number(b);
    } else if (op === "*") {
        answer = Number(a) * Number(b);
    }
    return answer;
}

// 다른 사람 풀이
function solution2(binomial) {
    const [a, op, b] = binomial.split(" ");
    return ops[op](Number(a), Number(b));
}

const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
};
