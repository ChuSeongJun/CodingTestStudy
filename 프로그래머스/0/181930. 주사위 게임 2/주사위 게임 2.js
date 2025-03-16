function solution(a, b, c) {
    var answer = 0;
    answer = case2(a, b, c);
    return answer;
}

function case2(a, b, c) {
    if (a === b && b === c) {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    } else if (a === b || b === c || a === c) {
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    } else {
        return a + b + c;
    }
}
