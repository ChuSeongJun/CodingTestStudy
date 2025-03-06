function solution(a, b, flag) {
    var answer = 0;
    answer = sol(flag, a, b);
    return answer;
}

const sol = (flag, a, b) => {
    if (flag === true) return a + b;
    else return a - b;
};
